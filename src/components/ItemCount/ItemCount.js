import React, {useState} from "react";
import { Button, Stack, ButtonGroup, Text, Heading } from '@chakra-ui/react'



export const ItemCount = ({stock = 1 , initial = 1, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));
    
    const decrement = () => {
        if (count > 0){setCount(count -1);}
        else{ console.log("Error")}
         }
    const increment = () => {
        if(stock > count) {setCount(count + 1);}
        else{console.log("no hay stock")} 
        }

    return(
        <>
        <Stack alignItems="center" justifyContent="center" spacing={2}>
                <Text fontSize='3xl'>{count}</Text>
                <ButtonGroup size='sm' isAttached variant='outline'>
                        <Button mr='-px' onClick={increment}>+</Button>
                        <Button mr='-px' onClick={decrement}>-</Button>
                </ButtonGroup>
                <Button onClick={onAdd}>Agregar al Carrito</Button>
        </Stack>
        </>
    );
 }