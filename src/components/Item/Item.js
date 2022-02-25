import { Heading, Image, Stack, Box, StackDivider, Button } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'


const Item = ({ nombre, imagen, id }) => {

    

    return (
        <Stack spacing={4} alignItems="center" justifyContent="center" wrap="flexWrap" divider={<StackDivider borderColor='gray.200' />} borderRadius="lg" padding="15px" shadow="md">
           <Box>
                <Heading as='h4' size='md' textAlign="center">{ nombre }</Heading>
                <Image src={imagen} alt={ nombre} boxSize="200"></Image>
           <StackDivider />
           </Box>
            
           <Box>
                <Link to={`/detail/${id}`}>
                    <Button colorScheme='teal' variant='ghost'>Ver detalle</Button>
                </Link>
           </Box> 
        </Stack>
    );
};

export default Item;