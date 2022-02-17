import './App.css';
import { NavBar } from './components/NavBar';
import { ChakraProvider, Container } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';


function App() {
  return (
      <ChakraProvider>
        <Container maxWidth="container.lg">
          <NavBar />
        </Container>
        <Container maxWidth="container.lg">
          <ItemListContainer />
        
            

        </Container>
      </ChakraProvider>
  );

}

export default App;
