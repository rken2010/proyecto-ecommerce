import React, {useState} from "react";
import { Button, Stack, ButtonGroup, Text, Heading } from '@chakra-ui/react'



export const ItemCount = ({stock , initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    
    const decrement = () => {
        if (count > 0){setCount(count -1);}
        else{ console.log("Error")}
         }
    const increment = () => {
        if(stock > count) {setCount(count + 1);}
        else{console.log("no hay stock")} 
        }
    function onAdd() { console.log ("Agregaste "+ {count.toString()} +" unidades del producto al carrito")}
    
    return(
        <>
        <Stack alignItems="center" justifyContent="center" spacing={2}>
                <Heading>Contador</Heading>
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