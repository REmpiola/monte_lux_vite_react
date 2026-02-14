import React from 'react';

const About = () => {
  return (
    <section className="about-section">
        <div className="container about-container">
            <span className="section-label dark-label">
                Biografía
            </span>
            
            <h2 className="about-heading" style={{ fontSize: '2.5rem' }}>
                MONTE LUX
            </h2>
            
            <div className="about-content" style={{ display: 'block', maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ marginBottom: '2rem' }}>
                    Monte es una banda de rock de Argentina, Provincia de Buenos Aires, formada en 2018. Su estilo se define entre la mezcla del rock clásico y el garage. Su nombre proviene de un juego de palabras a partir del proceso audiovisual del “montaje”, y también refiere a un terreno sin cultivar.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    El crudo sonido de Monte está relacionado directamente con las influencias del rock clásico de Argentina de los 70, transitando géneros como el Rock, Garage, Alternativo y Punk.
                </p>
                <p style={{ marginBottom: '3rem', fontStyle: 'italic', color: '#666' }}>
                    "Buscamos que los escuchas puedan encontrar un contexto donde canalizar sus búsquedas sobre el misterio del mundo."
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                    <div>
                        <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', color: '#999' }}>Personalidad</h4>
                        <p style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
                            Fuerza, Poder, Potencia, Razón, Intelecto, Belleza, Armonía, Inquietud, Desequilibrio, Nostalgia.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', color: '#999' }}>Conceptos</h4>
                        <p style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
                            Barrial, Culto, Cinematográfico, Futuro, Mar, Cosmológico, Cristalino, Brillo.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="about-divider">
                 <div className="divider-line"></div>
            </div>
        </div>
    </section>
  );
};

export default About;
