import React from "react";
import { Link, Stack, Text } from '@chakra-ui/react'



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
            <Link>Home</Link>
            <Link>Hombre</Link>
            <Link>Mujer</Link>
            <Link>Contacto</Link>
    </Stack>

    );
}