import React from 'react';
import Header from './components/Header';
import ElectronBcycle from './components/ElectronBcycle';
import PresentBcycle from './components/PresentBcycle';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import WoltSigning from './components/WoltSigning';
import Details from './components/Details'
import Playstation from './components/Playstation';

function App() {
 return (
  <div className="App">
    <Header />
    
    <main>
      <section id="e-bikes">
        <ElectronBcycle />
      </section>

      <section id="classic-bikes">
        <PresentBcycle />
      </section>

      <section id="wolt">
        <WoltSigning />
      </section>

      <section id="details">
        <Details />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="playstation">
        <Playstation />
      </section>
    </main>

  </div>
);
}

export default App;