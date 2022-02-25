import { Heading, Stack, Spinner } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { getProducts } from "../../mock/catalogo";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({shopName = "Ropa Libre "}){
    
    const [catalogo, setCatalogo] = useState ([]);
    const [cargando, setCargando] = useState (true);
    const { categoryId } = useParams();
    
    useEffect(() => {
        getProducts(categoryId)
            .then((resolve) => {
                setCatalogo(resolve);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setCargando(false);
            })
    }, [categoryId]);    
    return (
       <> 
        <Heading textAlign="center" m="20px">{shopName}</Heading>

        {cargando ? ( <Heading> Cargando... <Spinner/></Heading>) :
 
            <Stack direction="row" spacing={4}>
                <ItemList catalogo={catalogo} />
            </Stack>

        }
      </>
    )

}

export default ItemListContainer;