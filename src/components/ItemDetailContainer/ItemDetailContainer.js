import { Stack, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getItem } from "../../mock/catalogo";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getDoc, doc} from "firebase/firestore"
import { db } from "../../service/firebase/firebase";

const ItemDetailContainer = ({ id }) => {
    const [catalogo, setCatalogo] = useState();
    const [cargando, setCargando] = useState (true);
    const { itemId } = useParams();
    
        useEffect(() => {
            const docRef = doc( db, "catalogo", itemId)
            
            getDoc(docRef).then( response => {
                const item = { id: response.id, ...response.data()}
                setCatalogo(item)
            })
                .finally(() =>{
                    setCargando(false)
                })
                return (() => { setCatalogo() })                
            
        }, [itemId])

    return (
        <Stack alignItems="center" justifyContent="center" m="25px" spacing={8}>
            {cargando ? ( <Heading> Cargando... <Spinner/></Heading>) :
 
                <Stack direction="row">
                    <ItemDetail catalogo={catalogo} />
                </Stack>

            }
        </Stack>
    )
    }
export default ItemDetailContainer
