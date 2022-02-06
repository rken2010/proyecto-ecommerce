import React from "react";
import { Badge, Stack } from '@chakra-ui/react'
import cartIcon from "./cart-icon.svg"

export const CartWidget = () =>{
    return (
    <div>
        <Stack align="center">
        <Badge ml='1' fontSize='0.8em' colorScheme='green'>4</Badge>
        <img src={cartIcon} width="30" height="30" />
        </Stack>
        
    </div>
    )
}