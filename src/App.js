import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import AllRoutes from './components/pages/AllRoutes';


function App() {
  return (
    <Box>
     <Navbar/>
     <AllRoutes />
    </Box>
  );
}

export default App;
