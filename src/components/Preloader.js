import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Balanced preloader timing for stability
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200); // Increased to show logo animation

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="cs-preloader cs-center" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      background: "rgb(24, 24, 24)",
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.5s ease'
    }}>
      <div className="cs-preloader_logo" style={{
        animation: 'logoPulse 1.5s ease-in-out infinite',
        position: 'relative'
      }}>
        <img 
          src="/assets/img/logo.png" 
          alt="PixelHub Logo" 
          style={{
            width: '120px',
            height: 'auto',
            maxWidth: '100%',
            filter: 'drop-shadow(0 4px 8px rgba(253, 85, 14, 0.3))'
          }}
        />
        {/* Loading dots */}
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#fd550e',
            borderRadius: '50%',
            animation: 'dotPulse 1.4s ease-in-out infinite both'
          }}></div>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#fd550e',
            borderRadius: '50%',
            animation: 'dotPulse 1.4s ease-in-out infinite both 0.2s'
          }}></div>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#fd550e',
            borderRadius: '50%',
            animation: 'dotPulse 1.4s ease-in-out infinite both 0.4s'
          }}></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes logoPulse {
          0% { 
            transform: scale(0.8);
            opacity: 0.7;
          }
          50% { 
            transform: scale(1.1);
            opacity: 1;
          }
          100% { 
            transform: scale(0.8);
            opacity: 0.7;
          }
        }
        
        @keyframes dotPulse {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
