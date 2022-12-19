import { Box, Divider, useColorModeValue } from '@chakra-ui/react';
import './App.css';
import Github from './components/github/GitHub';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import Skills from './components/pages/skills/Skills';

function App() {
  return (
    <Box>
     <Navbar/>
     <Home />
     <Divider borderColor="#85b2ec" border='2px' w='auto' />
     <About />
     <Divider borderColor="#85b2ec" border='2px' w='auto' />
     <Projects />
     <Divider borderColor="#85b2ec" border='2px' w='auto' />
     <Skills />
     <Divider borderColor="#85b2ec" border='2px' w='auto' />
     <Github />
     <Divider borderColor="#85b2ec" border='2px' w='auto' />
     <Contact />
     <Divider borderColor="#85b2ec" border='2px' w='auto' />
    </Box>
  );
}

export default App;
