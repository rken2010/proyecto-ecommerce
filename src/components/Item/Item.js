import { Heading, Image, Stack, Box, Text, StackDivider } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";

const Item = ({ nombre, imagen, descripcion, stock }) => {

    function onAdd(count) { 

        console.log ({count});
    }

    return (
        <Stack spacing={2} alignItems="center" justifyContent="center" wrap="flexWrap" divider={<StackDivider borderColor='gray.200' />} borderRadius="lg" padding="15px" shadow="md">
           <Box>
                <Heading as='h4' size='md' textAlign="center">{ nombre }</Heading>
                <Image src={imagen} alt={ nombre} boxSize="200"></Image>
           <StackDivider />
           </Box>
           <Box>
           <Text fontSize='md' textAlign="center">{descripcion}</Text>
           </Box>  
           <ItemCount stock={stock} onAdd initial="1"/>    
        </Stack>
    );
};

export default Item;