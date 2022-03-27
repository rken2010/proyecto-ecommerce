import { useContext } from "react";
import { Container, Heading, Stack, StackDivider, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext";

const Checkout = ( {purchaseId , contact}) => {

    const {clear} = useContext(Context) 

    return(
        <Container maxW='container.md' padding={20} bg= "blackAlpha.100">
            <Stack  divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'>
                <Heading as="h2" center> Su N° de Orden es {purchaseId}</Heading>
                <Heading as= "h6">Datos del contacto</Heading>
                <p>Nombre: {contact?.name}</p>
                <p>Direccion: {contact?.address}</p>
                <p>E-mail: {contact?.mail}</p>
                <p>Telefono: {contact?.phone}</p>
                <p>Comentarios: {contact?.comment}</p>
            </Stack>
            <Link to={`/`}><Button colorScheme='teal' size='lg' onClick={ (e)=>clear() }>Volver a Home</Button></Link>
        </Container>
    )
}

export default Checkout;