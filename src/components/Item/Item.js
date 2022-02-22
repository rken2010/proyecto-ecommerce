import { Heading, Image, Stack, Box, StackDivider, Button } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'


const Item = ({ nombre, imagen, stock, id }) => {

    function onAdd(count) { 

        console.log ({count});
    }

    return (
        <Stack spacing={4} alignItems="center" justifyContent="center" wrap="flexWrap" divider={<StackDivider borderColor='gray.200' />} borderRadius="lg" padding="15px" shadow="md">
           <Box>
                <Heading as='h4' size='md' textAlign="center">{ nombre }</Heading>
                <Image src={imagen} alt={ nombre} boxSize="200"></Image>
           <StackDivider />
           </Box>
           <ItemCount stock={stock} onAdd initial="1"/>   
           <Box>
                <Link to={`/detail/${id}`}>
                    <Button colorScheme='teal' variant='ghost'>Ver detalle</Button>
                </Link>
           </Box> 

           <ItemCount stock={stock} onAdd initial="1"/>    

        </Stack>
    );
};

export default Item;