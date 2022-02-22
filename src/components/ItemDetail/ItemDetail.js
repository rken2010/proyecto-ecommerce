import { Image, Heading, Stack, StackDivider, Box, Text, Badge } from "@chakra-ui/react"

const ItemDetail = ({catalogo}) => {
    
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
           </Stack>
        </>
    )
}

export default ItemDetail;