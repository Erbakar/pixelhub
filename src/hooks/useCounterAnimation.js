import { useEffect } from 'react';

const useCounterAnimation = () => {
  useEffect(() => {
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

    // DOM yüklendikten sonra başlat
    const timeout = setTimeout(animateCounters, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
};

export default useCounterAnimation;
