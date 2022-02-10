import React from "react";
import { Link, Stack, Heading } from '@chakra-ui/react'
import { CartWidget } from "./CartWidget/CartWidget.js";



export const NavBar = () => {
    return (
    <Stack
      spacing={2}
      backgroundColor="whatsapp.500"
      alignItems="space-between"
      justifyContent="space-between"
      p = "20px"
      direction='row'
      >
          <Heading as="h1" color="orange.500">
          BRAND
          </Heading>
          <Link>Home</Link>
          <Link>Hombre</Link>
          <Link>Mujer</Link>
          <Link>Contacto</Link>
          <CartWidget />
    </Stack>
    

    );
}