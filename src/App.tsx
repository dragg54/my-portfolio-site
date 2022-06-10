import './App.css'
import { About } from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Hero } from './components/Hero/Hero';
import { Interests } from './components/Interests';
import Projects from './components/Projects';
import  Skills  from './components/Skills/Skills';
function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
