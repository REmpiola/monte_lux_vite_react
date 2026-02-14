import React from 'react';

const releases = [
  {
    title: "El Escándalo del Trueno",
    type: "EP",
    year: "2024",
    cover: "/El_relampago_del_trueno_tapa.jpg"
  },
  {
    title: "Río de Sangre",
    type: "Single",
    year: "2025",
    cover: "/rio_de_sangre_tapa.jpg"
  }
];

const Discography = () => {
  return (
    <section className="discography-section">
        <div className="container">
            <h2 className="section-title text-center">
                Discography
            </h2>
            
            <div className="disco-grid">
                {releases.map((release, index) => (
                    <div key={index} className="disco-item group">
                        <div className="disco-cover">
                            <img 
                                src={release.cover} 
                                alt={release.title}
                            />
                            <div className="disco-overlay"></div>
                        </div>
                        
                        <div className="disco-info">
                            <div>
                                <h3 className="disco-title">{release.title}</h3>
                                <p className="disco-type">{release.type}</p>
                            </div>
                            <span className="disco-year">{release.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Discography;
