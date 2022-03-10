import React from "react";
import { Badge, Stack } from '@chakra-ui/react'
import cartIcon from "./cart-icon.svg"
import { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () =>{
    
    const {productsInCart} = useContext(Context)

    return (
    <div>
        <Stack align="center">
        <Badge ml='1' fontSize='0.8em' colorScheme='green'>{productsInCart()}</Badge>
        <Link to={`/cart`}><img src={cartIcon} width="30" height="30" /></Link>
        </Stack>
        
    </div>
    )
}