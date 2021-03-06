import { createContext, useState } from "react"
import { Stack, Text } from "@chakra-ui/react";

export const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    const [ contact, setContact ] = useState ();
    
    function addItem(productToAdd, quantity){
        if(isInCart(productToAdd.id)){
            const item = findItem(productToAdd.id)
            if(item.quantity > 0){item.quantity += quantity}
            else{ return (<Stack><Text fontSize='xl' color="red.600"> No hay Stock</Text></Stack>) }
        }
        else{
            setCart([...cart, {...productToAdd, quantity }])
        }    
    }

    function removeItem(id){
        const newCart = cart.filter((prod) => prod.id !== id)
        setCart(newCart)
    }

    function clear(){
        setCart([]);
    }

    function isInCart(id) {
        return cart.some(i => i.id === id);
    }

    function findItem(id){
        const item = cart.find( element => element.id === id )

      if ( !id ) {
          throw new Error('No se encuentra el item ' + id)
      }
      return item;

    }
    function productsInCart(){
        let totalProducts = 0;
        
        cart.forEach((item) => {
            totalProducts += item.quantity;
         })
        return totalProducts;
    }
    function totalPurchase(){
        let totalSell = 0;
        
        cart.forEach((item) => {
            totalSell += item.quantity * item.precio;
         })
        return totalSell;
    }

    return ( 
        <Context.Provider value ={{
            cart,
            contact,
            setContact,
            addItem,
            removeItem,
            clear,
            productsInCart,
            totalPurchase,
        }}>
            {children}
        </Context.Provider>
        )
}

export default Context