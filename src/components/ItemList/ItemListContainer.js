import { Heading } from "@chakra-ui/react";
import React, {useState} from "react";
import { getProducts } from "../../mock/Products";

function ItemListContainer({shopName = "Ropa Libre "}){
    const [Products, setProducts] = useState ([]);
    
    getProducts.then((resolve) => {
        console.log(resolve);
    })
    return (
    <Heading>{shopName}</Heading>
    )
}

export default ItemListContainer;