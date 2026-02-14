import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="hero-section">
            {/* Background Image */}
            <div className="hero-bg">
                 <img 
                    src="/hero section image.JPG" 
                    alt="Monte Lux Background" 
                />
            </div>
            
            {/* Overlay Gradient */}
            <div className="hero-overlay"></div>

            <div className={`hero-content ${loaded ? 'visible' : ''}`}>
                <h1 className="hero-title">
                    Monte Lux
                </h1>
                <div className="hero-divider"></div>
                <p className="hero-subtitle">
                    Dos hermanos en resquemor. Un desconocido del extranjero.<br />
                    El prestidigitador del caos y un perfeccionista.
                </p>
            </div>
            
            <div className="scroll-indicator">
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
