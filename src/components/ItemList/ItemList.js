import Item from "../Item/Item.js"
import { Container } from "@chakra-ui/react";

const ItemList = ({ catalogo }) => {
    return (
        <>
            {catalogo.map((catalogo) => (
                <Container maxW='container.md' centerContent margin="10px" >
                    <Item {...catalogo} key={catalogo.id} />
                </Container>
            ))}
        </>
    );
};

export default ItemList;