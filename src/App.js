import './App.css';
import { NavBar } from './components/NavBar';
import { ChakraProvider, Container, Stack, SlackDivider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
        <Container maxWidth="container.lg">
          <NavBar />
        </Container>
      </ChakraProvider>
  );
}

export default App;
