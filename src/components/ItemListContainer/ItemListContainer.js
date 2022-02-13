import { Heading, Stack, Spinner, Container } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { getProducts } from "../../mock/catalogo";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({shopName = "Ropa Libre "}){
    
    const [catalogo, setCatalogo] = useState ([]);
    const [cargando, setCargando] = useState (true);
    
    useEffect(() => {
        getProducts
            .then((resolve) => {
                setCatalogo(resolve);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setCargando(false);
            })
    }, []);    
    return (
       <> 
        <Heading>{shopName}</Heading>

        {cargando ? ( <Heading> Cargando... <Spinner/></Heading>) :
 
            <Stack direction="row">
                <ItemList catalogo={catalogo} />
            </Stack>

        }
      </>
    )
}

export default ItemListContainer;