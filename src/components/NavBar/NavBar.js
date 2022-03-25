import { useEffect, useState, useContext } from 'react';
import { Link, Stack, Heading } from '@chakra-ui/react';
import { CartWidget } from "../CartWidget/CartWidget.js";
import { NavLink } from 'react-router-dom'
import Context from '../../context/CartContext.js';
import { db } from "../../service/firebase/firebase";
import { getDocs , collection, QuerySnapshot } from "firebase/firestore";




export const NavBar = () => {
    const [categories, setCategories] = useState([])
    const {cart} = useContext(Context)

    useEffect(() => {
      const catalogoCollectionRef = collection(db , "categories");
      

      getDocs( catalogoCollectionRef ).then( QuerySnapshot => {
             const categories = QuerySnapshot.docs.map ( doc => {
                 return { id:doc.id, ...doc.data()}
             })
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
          <NavLink to={"/"} activeClass="active"><Link>Home</Link></NavLink>
          <Stack 
                spacing={5}
                alignItems="space-evenly"
                justifyContent="space-evenly"
                direction='row'
          >
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}><Link m="20px" >{cat.description}</Link></NavLink>)}
          </Stack>
          {cart.length > 0 && <CartWidget />}
    </Stack>
    

    );
}