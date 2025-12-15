import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-coffee-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Testimonials />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
