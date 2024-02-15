import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import P2 from './components/P2';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
   <>
   <Navbar></Navbar>
   <Intro></Intro>
   <About></About>
   <Projects></Projects>
   <P2></P2>
   <Contact></Contact>
   </>
  );
}

export default App;
