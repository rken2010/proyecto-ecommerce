import './App.css';
import { NavBar } from './components/NavBar';
import { ChakraProvider, Container } from '@chakra-ui/react'
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
      <ChakraProvider>
        <Container maxWidth="container.lg">
          <NavBar />
        </Container>
        <ItemListContainer />
      </ChakraProvider>
  );

}

export default App;
