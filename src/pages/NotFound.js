import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '15px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#fd550e',
          margin: '0 0 1rem 0',
          lineHeight: '1'
        }}>
          404
        </h1>
        
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: '#333',
          margin: '0 0 1rem 0'
        }}>
          Sayfa Bulunamadı
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          margin: '0 0 2rem 0',
          lineHeight: '1.6'
        }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        
        <Link 
          to="/" 
          style={{
            display: 'inline-block',
            background: '#fd550e',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#e04a0a';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#fd550e';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
