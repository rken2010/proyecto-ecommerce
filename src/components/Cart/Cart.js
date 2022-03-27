import { Button, Heading, Image, Stack, StackDivider, Spinner, Container, Text  } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import { SmallCloseIcon, EditIcon } from "@chakra-ui/icons";
import { ImCreditCard } from "react-icons/im";
import { useContext, useState } from "react";
import Context from "../../context/CartContext";
import {collection, documentId, getDocs, query, Timestamp, writeBatch, where, addDoc } from 'firebase/firestore'
import { db } from "../../service/firebase/firebase";
import Swal from "sweetalert2";
import ContactForm from "../ContactForm/ContactForm";
import Checkout from "../Checkout/Checkout";


const Cart = () => {
    const {cart, removeItem, clear, totalPurchase} = useContext(Context)
   
    const [processingOrder, setProcessingOrder] = useState(false)
    const [ purchaseId, setPurchaseId] = useState()
    const [ viewForm , setViewForm ] = useState ( true )
    const [ viewResume , setViewResume ] = useState ( false )
    const [contact, setContact] = useState({
        name:``,
        mail:"",
        phone:``,
        address:``,
        comment:``,
    })

    function refreshContact() {
        setContact ({
            name:``,
            mail:"",
            phone:``,
            address:``,
            comment:``,
        })
        setViewForm(true)
    }

    const batch = writeBatch ( db )

    function purchase( orderToSend ){
        addDoc(collection(db, 'orders'), orderToSend)
            .then(({id}) => { 
                setPurchaseId(id)
                setViewResume(true)
                setViewForm(false)
                batch.commit()
 
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Su pedido fue enviado. El N° de orden es ${id}`,
                    showConfirmButton: false,
                    timer: 2000
                  })
            })
        
          .catch (error => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `${error}`,
                showConfirmButton: false,
                timer: 2000
              })
          })
          .finally(()=>{
            setProcessingOrder(false)
          })
    }

    const completePurchase = () =>{
        if( contact.phone !== '' && contact.address !== '' && contact.name !== '') {
         
            const orderToSend = {
            buyer: contact,
            items: cart,
            total:totalPurchase(),
            date: Timestamp.fromDate(new Date())
            }

        const noStock = []
        const ids = orderToSend.items.map( product => product.id )

        getDocs( query( collection ( db, "catalogo"), where( documentId(), `in`, ids)))
                .then( response => {
                    response.docs.forEach( ( docSnapshot ) => {
                        if( docSnapshot.data().stock >=  orderToSend.items.find( prod => prod.id === docSnapshot.id).quantity ) {
                            batch.update( docSnapshot.ref, { stock: docSnapshot.data().stock - orderToSend.items.find(prod => prod.id === docSnapshot.id).quantity })
                        }
                        else { noStock.push( { id: docSnapshot.id, ...docSnapshot.data()})}
                    })
                })
                .then( () => { 
                    if( noStock.length === 0) { purchase( orderToSend )}
                    else {
                        noStock.forEach(prod => {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: `${prod.name} no tiene stock`,
                                showConfirmButton: false,
                                timer: 2000
                              })
                            removeItem(prod.id)
                        })
                    }
                })
                .catch( (error) => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: `${error}`,
                        showConfirmButton: false,
                        timer: 2000
                      })
                })
                .finally(() => {
                    setProcessingOrder(false)
                })
            }
            else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `Complete el formulario para completar la compra`,
                    showConfirmButton: false,
                    timer: 2000
                  })

            }
    } 

    if(processingOrder) {
        return  <Heading>Se esta procesando su orden 
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'/> 
        </Heading>
           
    }

    if(cart.length === 0) {
        return (
            <Container maxW='container.md' centerContent>
                <Heading>Su orden esta vacia</Heading>
            </Container>
        )
    }

  
    return (
        <>
            {cart.map((prod) => 
                <Stack 
                    spacing={5} 
                    alignItems="center" 
                    direction="row" 
                    justifyContent="space-between" 
                    divider={<StackDivider borderColor='gray.200' />} 
                    borderRadius="lg" 
                    padding="15px" 
                    shadow="base" 
                    mt="15px" 
                    key={prod?.id}
                    >
                    <Image src={prod?.imagen} alt={prod?.nombre} boxSize="50px" />
                    <p>Producto: {prod?.nombre}</p>
                    <p>Cantidad: {prod?.quantity}</p>
                    <p>Precio: {prod?.precio}</p>
                   <Button onClick={(e)=> removeItem(prod?.id)} leftIcon={<DeleteIcon />} colorScheme='pink'>Eliminar</Button>
                </Stack>
            )}
            <Stack m="20px">
                <Heading as='h3' size='lg'>Total compra: $ {totalPurchase()}</Heading>
            </Stack>
           
            <Stack direction="row" alignItems="center" justifyContent="space-around">
                <Button leftIcon={<SmallCloseIcon/>} colorScheme="pink" onClick={(e) => clear()} >Vaciar Carrito</Button>
            </Stack>
            
            { viewForm === true ? <ContactForm setContact = { setContact } setViewForm = { setViewForm}/> : 
                <Container Container maxW='container.md' padding={20}>
                    <Stack>
                        <Heading as="h6">Nombre</Heading><Text>{contact.name}</Text>
                        <Heading as="h6">Direccion</Heading><Text>{contact.address}</Text>
                        <Heading as="h6">Telefono</Heading><Text>{contact.phone}</Text>
                        <Heading as="h6">E-mail</Heading><Text>{contact.mail}</Text>
                        <Heading as="h6">Comentarios</Heading><Text>{contact.comment}</Text>
                    </Stack>
                </Container>
            
            }

           { (contact.phone !== '' && contact.address !== '' && contact.name !== '' && viewResume === false) &&
            <Stack direction="row" alignItems="center" justifyContent="space-around">
                <Button 
                    mt={15}
                    leftIcon={<ImCreditCard/>}
                    colorScheme='teal'
                    onClick={(e)=> completePurchase()}>Confirmar compra
                </Button>
                <Button 
                    mt={15}
                    leftIcon={<EditIcon />}
                    colorScheme='pink'
                    onClick={(e)=> refreshContact()}>Modificar datos
                </Button>
            </Stack>
            }
            { viewResume === true &&  <Checkout contact = { contact } purchaseId = { purchaseId} /> }
        </>
    )
};

export default Cart;