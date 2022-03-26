import { Heading, Stack, Spinner } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../service/firebase/firebase";
import { getDocs , collection, query, where } from "firebase/firestore";

function ItemListContainer({shopName = "Ropa Libre "}){
    
    const [catalogo, setCatalogo] = useState ([]);
    const [cargando, setCargando] = useState (true);
    const { categoryId } = useParams(); 
    
    useEffect(() => {
        const collectionRef = categoryId ? query ( collection (db, "catalogo"), where( "categoria", "==", categoryId)) : 
        collection( db , "catalogo")

        getDocs( collectionRef ).then( QuerySnapshot => {
               const catalogo = QuerySnapshot.docs.map ( doc => {
                   return { id:doc.id, ...doc.data()}
               })
               setCatalogo(catalogo)
                })
                        
            .finally(() => {
                setCargando(false)
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