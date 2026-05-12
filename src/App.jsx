import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import './App.css';
import Training from './components/Training';

const ElectronBcycle = lazy(() => import('./components/ElectronBcycle'));
const PresentBcycle = lazy(() => import('./components/PresentBcycle'));
const WoltSigning = lazy(() => import('./components/WoltSigning'));
const Details = lazy(() => import('./components/Details'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Foods = lazy(() => import('./components/Foods'));
const Playstation = lazy(() => import('./components/Playstation'));

const PageLoader = () => (
  <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ff00' }}>
   <div className="omar-loader-container">
  <div className="loader-wrapper">
    {/* Üst tərəfdə neon parıldayan loqo mətni */}
    <h1 className="loader-logo">
      {"OMAR GROUP".split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
    
    {/* Alt tərəfdə ultra-sürətli yüklənmə xətti */}
    <div className="loader-bar-wrapper">
      <div className="loader-bar-progress"></div>
      <div className="loader-bar-glow"></div>
    </div>
    
    <span className="loader-subtext">YÜKLƏNİR</span>
  </div>
</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        {/* Suspense bütün lazy komponentləri bükməlidir */}
        <Suspense fallback={<PageLoader />}>
          
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

          <section id="training">
            <Training />
          </section>

          <section id="food">
            <Foods />
          </section>
          
   
          
     

        </Suspense>
      </main>
    </div>
  );
}

export default App;