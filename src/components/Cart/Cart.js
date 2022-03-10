import { Box, Button, Heading, Image, Img, Stack, StackDivider  } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { DeleteIcon } from '@chakra-ui/icons'
import Context from "../../context/CartContext";

const Cart = () => {
    const {cart} = useContext(Context)
    const {removeItem, clear, totalPurchase} = useContext(Context)
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
            <Button leftIcon={<SmallCloseIcon/>} colorScheme="pink" onClick={(e) => clear()} >Vaciar Carrito</Button>
        </>
    )
};

export default Cart;