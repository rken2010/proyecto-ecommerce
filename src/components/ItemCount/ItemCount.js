import React, {useState} from "react";
import { Button, Stack, ButtonGroup, Text } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom'



export const ItemCount = ({stock = 0 , initial = 0, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));
    const [ outToStock, setOutToStock ] = useState( true )
    
    const decrement = () => {
        if (count > 1 ){setCount(count -1);}
    }    
    const increment = () => {
        if(stock > count) {setCount(count + 1);}
        else{
            setOutToStock( false )
        } 
    }

    return(
        <>
        <Stack alignItems="center" justifyContent="center" spacing={2}>
                <Text fontSize='3xl'>{count}</Text>
                <ButtonGroup size='sm' isAttached variant='outline'>
                        <Button mr='-px' onClick={increment}>+</Button>
                        <Button mr='-px' onClick={decrement}>-</Button>
                </ButtonGroup>
                { outToStock === true ?
                <Button onClick={(e) => onAdd(count)} colorScheme='teal' size='lg' leftIcon={<AddIcon />}>Agregar al Carrito</Button> :
                <Stack>
                    <Text fontSize='xl' color="red.600"> No hay Stock</Text>
                    <Link to={`/`}><Button colorScheme='teal' size='lg'>Seguir comprando</Button></Link>
                </Stack>

                }
        </Stack>
        </>
    );
 }