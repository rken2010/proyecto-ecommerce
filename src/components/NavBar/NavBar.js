import { useEffect, useState, useContext } from 'react';
import { Link, Stack, Heading } from '@chakra-ui/react';
import { CartWidget } from "../CartWidget/CartWidget.js";
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../mock/catalogo.js';
import Context from '../../context/CartContext.js';



export const NavBar = () => {
    const [categories, setCategories] = useState([])
    const {cart} = useContext(Context)

    useEffect(() => {
        getCategories().then(categories => {
          setCategories(categories)
        })
      }, [])

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
          ROPA LIBRE
          </Heading>
          <NavLink to={"/"}><Link>Home</Link></NavLink>
          <Stack 
                spacing={8}
                alignItems="space-evenly"
                justifyContent="space-evenly"
                direction='row'
          >
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}><Link>{cat.description}</Link></NavLink>)}
          </Stack>
          {cart.length > 0 && <CartWidget />}
    </Stack>
    

    );
}