import { Heading, Image, Stack, Box, Text, StackDivider } from "@chakra-ui/react";

const Item = ({ nombre, imagen, descripcion }) => {
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
        </Stack>
    );
};

export default Item;