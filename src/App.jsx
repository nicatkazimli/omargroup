import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import './App.css';
import Training from './components/Training';

// Komponentləri Lazy olaraq import edirik
const ElectronBcycle = lazy(() => import('./components/ElectronBcycle'));
const PresentBcycle = lazy(() => import('./components/PresentBcycle'));
const WoltSigning = lazy(() => import('./components/WoltSigning'));
const Details = lazy(() => import('./components/Details'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Playstation = lazy(() => import('./components/Playstation'));

// Yüklənmə zamanı görünəcək sadə bir placeholder (istəyə görə spinner qoya bilərsən)
const PageLoader = () => (
  <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ff00' }}>
    <div className="loader">Yüklənir...</div>
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

        </Suspense>
      </main>
    </div>
  );
}

export default App;