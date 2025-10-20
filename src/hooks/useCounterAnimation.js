import { useEffect } from 'react';

const useCounterAnimation = (locationPath = null) => {
  useEffect(() => {
    // Önceki sayfadan kalan counter animasyonlarını sıfırla
    const resetCounters = () => {
      const counters = document.querySelectorAll('.odometer');
      counters.forEach(counter => {
        counter.classList.remove('animated');
        const target = counter.getAttribute('data-count-to');
        if (target) {
          counter.textContent = '0';
        }
      });
    };

    const animateCounters = () => {
      const counters = document.querySelectorAll('.odometer');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-count-to'));
            const duration = 2000; // 2 saniye
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;
            
            counter.classList.add('animated');
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current);
              }
            }, 16);
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      });

      counters.forEach(counter => {
        counter.textContent = '0';
        observer.observe(counter);
      });

      return () => observer.disconnect();
    };

    // Önce counter'ları sıfırla, sonra animasyonu başlat
    resetCounters();
    
    // DOM yüklendikten sonra başlat
    const timeout = setTimeout(animateCounters, 1000);
    
    return () => clearTimeout(timeout);
  }, [locationPath]);
};

export default useCounterAnimation;
