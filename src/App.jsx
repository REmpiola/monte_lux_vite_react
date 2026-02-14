import React from 'react';
import Hero from './components/Hero';
import LatestRelease from './components/LatestRelease';
import Discography from './components/Discography';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app">
      <Hero />
      <LatestRelease />
      <Discography />
      <VideoSection />
      <About />
      <Gallery />
      
      <footer className="main-footer">
        <div className="container">
            {/* Partners */}
            <div className="partners-section" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', opacity: 0.6 }}>
                <div style={{ textAlign: 'center' }}>
                    <img 
                        src="/fuego_amigo.webp" 
                        alt="Fuego Amigos" 
                        style={{ height: '40px', filter: 'grayscale(100%) brightness(0.8)', marginBottom: '0.5rem', opacity: 0.8 }} 
                    />
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666' }}>Distribuidora</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img 
                        src="/templo_limon_studio.webp" 
                        alt="Templo Limon" 
                        style={{ height: '40px', filter: 'grayscale(100%) brightness(0.8)', marginBottom: '0.5rem', opacity: 0.8 }} 
                    />
                     <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666' }}>Estudio</span>
                </div>
            </div>

            {/* Contact */}
            <div className="contact-section" style={{ marginBottom: '3rem' }}>
                <a href="mailto:bienvenidosalmonte@gmail.com" style={{ display: 'block', color: '#888', textDecoration: 'none', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.875rem' }}>
                    bienvenidosalmonte@gmail.com
                </a>
                <a href="https://www.instagram.com/_monteoficial" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', color: '#888', textDecoration: 'none', letterSpacing: '0.1em', fontSize: '0.875rem' }}>
                    Instagram
                </a>
            </div>

            <p>&copy; {new Date().getFullYear()} MONTE LUX. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
