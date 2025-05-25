import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackToTop from './components/BackToTop';
import ExclusiveOffer from './components/ExclusiveOffer';
import PopularNow from './components/PopularNow';
import './styles/ExclusiveOffer.css';
import './styles/PopularNow.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <PopularNow />
        <Menu />
        <ExclusiveOffer />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
