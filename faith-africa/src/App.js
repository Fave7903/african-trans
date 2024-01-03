import './App.css';
// import { TypeAnimation } from 'react-type-animation';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Footer from './components/Footer';
import Hero from './components/Hero';



function App() {
  return (
    <div>
    <div className="App font-ubuntu text-center font-bold">

    <Nav />

    <div id='hero'>
      <section class="py-7">
          <Hero />
      </section>
    </div>

    <div id='about' className='py-7 '>
      <About />
    </div>

    <div id='events' className='py-7 '>
      <Events />
    </div>

    <div id="contact" className='py-7'>
      <Contact />
    </div>

    <Footer />
    
    </div>
    </div>
  );
}

export default App;
