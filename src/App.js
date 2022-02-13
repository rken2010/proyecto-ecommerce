import './App.css';
import { NavBar } from './components/NavBar';
import { ChakraProvider, Container } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { ItemCount } from './components/ItemCount/ItemCount';


function App() {
  return (
      <ChakraProvider>
        <Container maxWidth="container.lg">
          <NavBar />
        </Container>
        <Container>
          <ItemListContainer />
          <ItemCount stock="10" initial="1" />
        </Container>
      </ChakraProvider>
  );

}

export default App;
