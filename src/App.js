import './App.css';
import { ChakraProvider, Container } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <ChakraProvider>
        <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                  <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
                  <Route path='/cart' element={<Cart />}/>
              </Routes>
            </BrowserRouter>
        </CartContextProvider>
    </ChakraProvider>
  );

}

export default App;
