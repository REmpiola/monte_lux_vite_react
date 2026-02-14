import React from 'react';

const VideoSection = () => {
    return (
        <section className="video-section" style={{ padding: 0, height: '80vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
            <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
            >
                <source src="/The_Architecture_of_Grace_version_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 10 }}>
                <span className="section-label" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    Cinematografía // The Architecture of Grace
                </span>
            </div>
        </section>
    );
};

export default VideoSection;
