import { Stack, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { getItem } from "../../mock/catalogo";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
    const [catalogo, setCatalogo] = useState();
    const [cargando, setCargando] = useState (true);

        useEffect(() => {
            getItem
                .then((resolve) => {
                    setCatalogo(resolve);
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setCargando(false);
                })
                return (() => {
                    setCatalogo()
                })
        }, []); 
    return (
        <Stack>
            {cargando ? ( <Heading> Cargando... <Spinner/></Heading>) :
 
                <Stack direction="row">
                    <ItemDetail catalogo={catalogo} />
                </Stack>

            }
        </Stack>
    )
    }
export default ItemDetailContainer
