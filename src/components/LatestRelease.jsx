import React from 'react';

const LatestRelease = () => {
    return (
        <section className="latest-release-section">
            <div className="container">
                <div className="release-layout">
                    <div className="release-visual">
                         <div className="spotify-embed-container" style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                            <iframe 
                                style={{ borderRadius: '12px' }} 
                                src="https://open.spotify.com/embed/artist/3OZME5e8VdD4bXpmy3ksU4?utm_source=generator&theme=0" 
                                width="100%" 
                                height="352" 
                                frameBorder="0" 
                                allowfullscreen="" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy"
                                title="Monte Spotify Artist Embed"
                            ></iframe>
                        </div>
                    </div>
                    
                    <div className="release-info">
                        <div>
                            <span className="section-label">
                                Latest Release // Single
                            </span>
                            <h2 className="release-title">
                                El Escándalo del Trueno
                            </h2>
                            <p className="release-description">
                                Barrial, Culto, Cinematográfico (visual)
                            </p>
                        </div>
                        
                        <div className="release-actions">
                            <a 
                                href="https://open.spotify.com/intl-es/artist/3OZME5e8VdD4bXpmy3ksU4" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Open Web Player
                            </a>
                            <a 
                                href="https://montelux.bandcamp.com/track/r-os-de-sangre" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Bandcamp
                            </a>
                            <button className="btn btn-secondary">
                                Apple Music
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestRelease;
