import { useEffect } from 'react';

const useScrollEffects = () => {
  useEffect(() => {
    // jQuery'nin yüklenmesini bekle
    const initEffects = () => {
      if (typeof window.$ === 'undefined') {
        setTimeout(initEffects, 100);
        return;
      }
    // Preloader
    const preloader = () => {
      const preloaderIn = document.querySelector('.cs-preloader_in');
      const preloaderEl = document.querySelector('.cs-preloader');
      
      if (preloaderIn) {
        preloaderIn.style.opacity = '0';
        preloaderIn.style.transition = 'opacity 0.3s ease';
      }
      
      if (preloaderEl) {
        setTimeout(() => {
          preloaderEl.style.opacity = '0';
          preloaderEl.style.transition = 'opacity 0.5s ease';
          setTimeout(() => {
            preloaderEl.style.display = 'none';
          }, 500);
        }, 150);
      }
    };

    // Dynamic Background
    const dynamicBackground = () => {
      document.querySelectorAll('[data-src]').forEach((element) => {
        const src = element.getAttribute('data-src');
        if (src) {
          element.style.backgroundImage = `url(${src})`;
        }
      });
    };

    // Counter Animation
    const counterInit = () => {
      const counters = document.querySelectorAll('.odometer');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const countTo = counter.getAttribute('data-count-to');
            if (countTo && !counter.classList.contains('counted')) {
              counter.textContent = countTo;
              counter.classList.add('counted');
            }
          }
        });
      }, { threshold: 0.5 });

      counters.forEach((counter) => observer.observe(counter));
    };

    // Parallax Effect
    const parallaxEffect = () => {
      const parallaxElements = document.querySelectorAll('.cs-parallax_bg, .cs-parallax');
      
      parallaxElements.forEach((element) => {
        const windowScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + windowScroll;
        const elementHeight = elementRect.height;
        
        const isVisible = elementTop <= windowScroll + windowHeight && 
                         elementTop + elementHeight >= windowScroll;
        
        if (isVisible) {
          const calculatedHeight = (windowScroll + windowHeight) - elementTop;
          const largeEffectPixel = calculatedHeight / 5 - 150;
          const miniEffectPixel = calculatedHeight / 10;
          
          // Apply parallax transformations
          const toLeft = element.querySelector('.cs-to_left');
          const toRight = element.querySelector('.cs-to_right');
          const toUp = element.querySelector('.cs-to_up');
          const toDown = element.querySelector('.cs-to_down');
          const toRotate = element.querySelector('.cs-to_rotate');
          
          if (toLeft) toLeft.style.transform = `translateX(-${miniEffectPixel}px)`;
          if (toRight) toRight.style.transform = `translateX(${miniEffectPixel}px)`;
          if (toUp) toUp.style.transform = `translateY(-${miniEffectPixel}px)`;
          if (toDown) toDown.style.transform = `translateY(${miniEffectPixel}px)`;
          if (toRotate) toRotate.style.transform = `rotate(${miniEffectPixel}deg)`;
          
          // Background position
          element.style.backgroundPosition = `center -${largeEffectPixel}px`;
        }
      });
    };

    // Scroll Up Button
    const showScrollUp = () => {
      const scrollUp = document.querySelector('.cs-scrollup');
      if (scrollUp) {
        if (window.pageYOffset >= 350) {
          scrollUp.classList.add('cs-scrollup_show');
        } else {
          scrollUp.classList.remove('cs-scrollup_show');
        }
      }
    };

    // Scroll event handler
    const handleScroll = () => {
      counterInit();
      parallaxEffect();
      showScrollUp();
    };

    // Load event handler
    const handleLoad = () => {
      preloader();
      dynamicBackground();
      counterInit();
    };

    // Add event listeners
    window.addEventListener('load', handleLoad);
    window.addEventListener('scroll', handleScroll);

    // Initial calls
    dynamicBackground();
    
    // Initialize WOW.js for animations
    if (typeof window.WOW !== 'undefined') {
      new window.WOW().init();
    }

    // Initialize Slick Sliders
    const initSliders = () => {
      const $ = window.$;
      if ($) {
        // Blog slider
        if ($('.cs-post_wrap .cs-slider_container').length && !$('.cs-post_wrap .cs-slider_container').hasClass('slick-initialized')) {
          $('.cs-post_wrap .cs-slider_wrapper').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            infinite: true,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  variableWidth: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  variableWidth: false
                }
              }
            ]
          });
        }

        // Team slider
        if ($('.cs-team').parent('.cs-slide').parent('.cs-slider_wrapper').length && !$('.cs-team').parent('.cs-slide').parent('.cs-slider_wrapper').hasClass('slick-initialized')) {
          $('.cs-team').parent('.cs-slide').parent('.cs-slider_wrapper').slick({
            autoplay: false,
            speed: 600,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            appendDots: $('.cs-team').closest('.cs-slider').find('.cs-pagination'),
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
        }

        // Portfolio slider
        if ($('.cs-portfolio').parent('.cs-slide').parent('.cs-slider_wrapper').length && !$('.cs-portfolio').parent('.cs-slide').parent('.cs-slider_wrapper').hasClass('slick-initialized')) {
          $('.cs-portfolio').parent('.cs-slide').parent('.cs-slider_wrapper').slick({
            autoplay: false,
            speed: 600,
            infinite: true,
            centerMode: true,
            centerPadding: '28%',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            appendDots: $('.cs-portfolio').closest('.cs-slider').find('.cs-pagination')
          });
        }

        // Awards timeline slider
        if ($('.cs-time_line').parent('.cs-slide').parent('.cs-slider_wrapper').length && !$('.cs-time_line').parent('.cs-slide').parent('.cs-slider_wrapper').hasClass('slick-initialized')) {
          $('.cs-time_line').parent('.cs-slide').parent('.cs-slider_wrapper').slick({
            autoplay: false,
            speed: 600,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: $('.cs-left_arrow'),
            nextArrow: $('.cs-right_arrow'),
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
        }

        // Testimonial slider (dual slider)
        if ($('.slider-for').length && !$('.slider-for').hasClass('slick-initialized')) {
          $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.slider-nav'
          });
        }

        if ($('.slider-nav').length && !$('.slider-nav').hasClass('slick-initialized')) {
          $('.slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true
          });
        }
      }
    };

    // Slider'ları biraz gecikmeyle initialize et
    setTimeout(initSliders, 1500);
    
    // Scroll up click handler
    const scrollUpBtn = document.querySelector('.cs-scrollup');
    if (scrollUpBtn) {
      scrollUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('scroll', handleScroll);
      
      // Cleanup sliders
      const $ = window.$;
      if ($) {
        $('.cs-slider_wrapper').each(function() {
          if ($(this).hasClass('slick-initialized')) {
            $(this).slick('unslick');
          }
        });
        $('.slider-for, .slider-nav').each(function() {
          if ($(this).hasClass('slick-initialized')) {
            $(this).slick('unslick');
          }
        });
      }
      
      // Reset WOW animations
      if (typeof window.WOW !== 'undefined') {
        const wow = new window.WOW();
        wow.init();
      }
    };
    };

    // jQuery yüklenmesini bekle ve init et
    initEffects();
  }, []);
};

export default useScrollEffects;
