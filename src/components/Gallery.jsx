import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery-section">
        <div className="container">
            <h2 className="section-label text-center mb-huge">
                Visual Archives
            </h2>
            
            <div className="gallery-grid">
                {/* Masonry Grid with Real Assets */}
                <div className="gallery-item item-large">
                     <img src="/_DLS4234.JPG" alt="Monte Lux Gallery 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-small">
                     <img src="/hero section image.JPG" alt="Monte Lux Gallery 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-tall">
                     <img src="/_DLS4304.JPG" alt="Monte Lux Gallery 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-small">
                     <img src="/_DLS4649.JPG" alt="Monte Lux Gallery 4" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-large" style={{ marginTop: '-200px' }}> {/* Crisol overlap effect */}
                     <img src="/_DLS4573.JPG" alt="Monte Lux Gallery 5" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-small">
                     <img src="/image (6).webp" alt="Monte Lux Gallery 6" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-tall">
                     <img src="/image (7).webp" alt="Monte Lux Gallery 7" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-small">
                     <img src="/image (8).webp" alt="Monte Lux Gallery 8" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-tall">
                     <img src="/image (9).webp" alt="Monte Lux Gallery 9" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="gallery-item item-small">
                     <img src="/image (10).webp" alt="Monte Lux Gallery 10" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
            </div>
             <p className="gallery-footer">
                More assets to be deployed
            </p>
        </div>
    </section>
  );
};

export default Gallery;
