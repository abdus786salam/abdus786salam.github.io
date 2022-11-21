import { Box } from '@chakra-ui/react';
import './App.css';
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
     <About />
     <Projects />
     <Skills />
     <Contact />
    </Box>
  );
}

export default App;
