import './App.css';
import { ChakraProvider, Container } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="container.lg">
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
        </Container>
      </ChakraProvider>
  );

}

export default App;
