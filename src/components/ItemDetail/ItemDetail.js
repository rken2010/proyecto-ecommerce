import { Image, Heading, Stack, StackDivider, Box, Text, Badge, Button } from "@chakra-ui/react"
import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'


const ItemDetail = ({catalogo}) => {

    const [on , setOn ] = useState(true)

    function onAdd(count) { 
        console.log (count);
        setOn(false); 
        console.log(on)
    }

   
       

    

    return (
        <>
           <Stack spacing={10} alignItems="center" justifyContent="center" wrap="flexWrap" divider={<StackDivider borderColor='gray.200' />} borderRadius="lg" padding="15px" shadow="md">
                <Box>
                        <Heading as='h3' size='md' textAlign="center">{ catalogo?.nombre }
                        <Badge ml="1" colorScheme='purple'>New</Badge>
                        </Heading>
                        <Image 
                            src={catalogo?.imagen} 
                            alt={ catalogo?.nombre} 
                            boxSize="200">
                        </Image>
                </Box>
                <Box>
                    <Text fontSize='md' textAlign="center">Detalle: {catalogo?.descripcion}</Text>
                    <Text fontSize='md' textAlign="center"> Precio: $ {catalogo?.precio}</Text>
                </Box>  
                {on == true ?  <ItemCount stock={catalogo?.stock} onAdd={onAdd}  initial="1"/> :
                    <Link to={`/cart`}><Button colorScheme='teal' variant='ghost'>Terminar Compra</Button>
                     </Link>
                }

                 
           </Stack>
        </>
    )
}

export default ItemDetail;