import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <Nav />
      <main className="pt-20 md:pt-24">
        <section id="hero" className="pb-16">
          <Hero />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="events" className="py-16">
          <Events />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
