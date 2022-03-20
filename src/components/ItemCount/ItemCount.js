import React, {useState} from "react";
import { Button, Stack, ButtonGroup, Text } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons";



export const ItemCount = ({stock = 0 , initial = 0, onAdd}) => {

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
                <Button onClick={(e) => onAdd(count)} colorScheme='teal' size='lg' leftIcon={<AddIcon />}>Agregar al Carrito</Button>
        </Stack>
        </>
    );
 }