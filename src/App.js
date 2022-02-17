import './App.css';
import { ChakraProvider, Container } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';



function App() {
  return (
      <ChakraProvider>
        <Container maxWidth="container.lg">
          <NavBar />
          <ItemListContainer /> 
        </Container>
      </ChakraProvider>
  );

}

export default App;
