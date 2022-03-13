import { Button, Heading, Image, Stack, StackDivider, Spinner  } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import { SmallCloseIcon } from "@chakra-ui/icons";
import { ImCreditCard } from "react-icons/im";
import { useContext, useState } from "react";
import Context from "../../context/CartContext";
import { sendOrder, reloadStock } from "../../service/firebase/firebase";



const Cart = () => {
    const {cart} = useContext(Context)
    const {removeItem, clear, totalPurchase} = useContext(Context)
    
    const[controlOrder, setControlOrder] = useState(false)
    const[processOrder, setProcessOrder] = useState()
    const [contact, setContact] = useState({
        name:``,
        phone:``,
        address:``,
        comment:``,
    })
    const completePurchase = () =>{
        const orderToSend = {
            buyer: {
                name:`juan`,
                phone:"123546",
                address:"asdf 123",
                comment:"mi primera compra"
            },
            items: cart,
            total:totalPurchase(),
            date: new Date()
        }
        
        reloadStock(orderToSend)
        clear()
        
    } 
    //if(processOrder){
    //    return <Heading>Su orden se esta procesando<Spinner/></Heading>
    //}
    //
    return (
        <>
            {cart.map((prod) => 
                <Stack spacing={5} alignItems="center" direction="row" justifyContent="space-between" divider={<StackDivider borderColor='gray.200' />} borderRadius="lg" padding="15px" shadow="base" mt="15px" >
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
                <Button leftIcon={<ImCreditCard/>} colorScheme='teal' onClick={(e)=> completePurchase()}>Confirmar compra</Button>
            </Stack>
            
        </>
    )
};

export default Cart;