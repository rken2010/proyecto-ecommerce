import React, {useState} from "react";
import { Button, Stack } from '@chakra-ui/react'



export const ItemCount = ({stock , initial, onAdd}) => {
    const [count, setCount] = useState(0);
    
    const decrement = () => {
        setCount(count -1);
         }
    const increment = () => {
        setCount(count + 1);
             }
    
    return(
        <>
        <h3>Contador</h3>
        <Stack direction="row">
        <Button colorScheme='teal' size='md' m="10px" onClick={increment}> + </Button>
        <h3 textAlign = "center">{count}</h3>
        <Button colorScheme='teal' size='md' onClick={decrement}> - </Button>
        </Stack>
        </>
    );
 }