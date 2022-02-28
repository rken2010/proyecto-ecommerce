import { Button, Heading, Img, Stack, StackDivider,  } from "@chakra-ui/react";
import { useContext } from "react";
import { DeleteIcon } from '@chakra-ui/icons'
import Context from "../../context/CartContext";

const Cart = () => {
    const {cart} = useContext(Context)
    const {removeItem, clear, totalPurchase} = useContext(Context)
    return (
        <>
            {cart.map((prod) => 
                <Stack spacing={10} alignItems="center" direction="row" justifyContent="center" divider={<StackDivider borderColor='gray.200' />} borderRadius="lg" padding="15px" shadow="md" >
                    <Img src={prod?.imagen} alt={prod?.nombre} boxSize="50px"/>
                    <p>Producto: {prod?.nombre}</p>
                    <p>Cantidad: {prod?.quantity}</p>
                    <p>Precio: {prod?.precio}</p>
                   <Button onClick={(e)=> removeItem(prod?.id)} leftIcon={<DeleteIcon />} colorScheme='pink'>Eliminar</Button>
                </Stack>
            )}
            <Stack m="20px">
                <Heading as='h3' size='lg'>Total compra: {totalPurchase()}</Heading>
            </Stack>
            <Button onClick={(e) => clear() }>Vaciar Carrito</Button>
        </>
    )
};

export default Cart;