import { Heading } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";


function ItemListContainer({contenido = "Aca va a ir el contenido "}){
  
    return (
   
   <div>
        <Heading>{contenido}</Heading>
            <ItemCount stock="10"  initial="1" />
    </div>
        )
    
}

export default ItemListContainer;