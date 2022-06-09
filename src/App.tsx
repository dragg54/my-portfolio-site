import './App.css'
import { About } from './components/About';
import Contact from './components/Contact';
import { Hero } from './components/Hero/Hero';
import Projects from './components/Projects';
import  Skills  from './components/Skills/Skills';
function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
