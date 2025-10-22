import { useEffect } from 'react';

const useInteractiveEffects = (locationPath = null) => {
  useEffect(() => {
    // Sadece gerekli sayfalarda interactive effects çalıştır
    if (locationPath !== '/' && locationPath !== '/portfolio' && locationPath !== '/services') {
      return;
    }
    // Tabs functionality
    const initTabs = () => {
      const tabLinks = document.querySelectorAll('.cs-tabs .cs-tab_links a');
      
      tabLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetTab = document.querySelector(`.cs-tabs ${targetId}`);
          
          if (targetTab) {
            // Hide all tabs
            const allTabs = document.querySelectorAll('.cs-tabs .cs-tab_body');
            allTabs.forEach((tab) => {
              tab.style.display = 'none';
            });
            
            // Show target tab
            targetTab.style.display = 'block';
            
            // Update active states
            const allLinks = document.querySelectorAll('.cs-tabs .cs-tab_links li');
            allLinks.forEach((li) => li.classList.remove('active'));
            link.parentElement.classList.add('active');
          }
        });
      });
    };

    // Accordion functionality
    const initAccordion = () => {
      // Hide all accordion bodies initially except active ones
      const accordionBodies = document.querySelectorAll('.cs-accordian_body');
      accordionBodies.forEach((body) => {
        if (!body.parentElement.classList.contains('active')) {
          body.style.display = 'none';
        }
      });

      const accordionHeads = document.querySelectorAll('.cs-accordian_head');
      
      accordionHeads.forEach((head) => {
        head.addEventListener('click', () => {
          const accordian = head.parentElement;
          const body = head.nextElementSibling;
          const allAccordians = document.querySelectorAll('.cs-accordian');
          const allBodies = document.querySelectorAll('.cs-accordian_body');
          
          // Close all other accordions
          allBodies.forEach((otherBody) => {
            if (otherBody !== body) {
              otherBody.style.display = 'none';
            }
          });
          
          allAccordians.forEach((otherAccordian) => {
            if (otherAccordian !== accordian) {
              otherAccordian.classList.remove('active');
            }
          });
          
          // Toggle current accordion
          if (body.style.display === 'none' || !body.style.display) {
            body.style.display = 'block';
            accordian.classList.add('active');
          } else {
            body.style.display = 'none';
            accordian.classList.remove('active');
          }
        });
      });
    };

    // Modal Video functionality
    const initModalVideo = () => {
      const videoOpenBtns = document.querySelectorAll('.cs-video_open');
      const videoPopup = document.querySelector('.cs-video_popup');
      const videoCloseBtns = document.querySelectorAll('.cs-video_popup_close, .cs-video_popup_layer');
      const videoIframe = document.querySelector('.cs-video_popup_container iframe');
      
      videoOpenBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const videoUrl = btn.getAttribute('href');
          if (videoUrl && videoIframe) {
            const videoId = videoUrl.split('?v=')[1]?.trim();
            if (videoId) {
              videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
              if (videoPopup) {
                videoPopup.classList.add('active');
              }
            }
          }
        });
      });
      
      videoCloseBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (videoPopup) {
            videoPopup.classList.remove('active');
          }
          if (videoIframe) {
            videoIframe.src = 'about:blank';
          }
          document.documentElement.classList.remove('overflow-hidden');
        });
      });
    };

    // Hobble Effect (3D hover effect)
    const initHobbleEffect = () => {
      const hobbleElements = document.querySelectorAll('.cs-hobble');
      
      hobbleElements.forEach((element) => {
        element.addEventListener('mousemove', (event) => {
          const rect = element.getBoundingClientRect();
          const halfW = rect.width / 2;
          const halfH = rect.height / 2;
          const coorX = halfW - (event.clientX - rect.left);
          const coorY = halfH - (event.clientY - rect.top);
          
          const degX1 = (coorY / halfH) * 8 + 'deg';
          const degY1 = (coorX / halfW) * -8 + 'deg';
          
          const layer1 = element.querySelector('.cs-hover_layer1');
          const layer2 = element.querySelector('.cs-hover_layer2');
          const layer3 = element.querySelector('.cs-hover_layer3');
          
          if (layer1) {
            layer1.style.transform = `perspective(800px) translate3d(0, 0, 0) rotateX(${degX1}) rotateY(${degY1})`;
          }
          
          if (layer2) {
            const degX2 = (coorY / halfH) * -50 + 'px';
            const degY2 = (coorX / halfW) * 70 + 'px';
            layer2.style.transform = `perspective(800px) translateY(${degX2}) translateX(${degY2})`;
          }
          
          if (layer3) {
            const degX3 = (coorY / halfH) * -10 + 'px';
            const degY3 = (coorX / halfW) * 10 + 'px';
            layer3.style.transform = `perspective(800px) translateX(${degX3}) translateY(${degY3}) scale(1.02)`;
          }
        });
        
        element.addEventListener('mouseleave', () => {
          const layers = element.querySelectorAll('.cs-hover_layer1, .cs-hover_layer2, .cs-hover_layer3');
          layers.forEach((layer) => {
            layer.style.transform = '';
          });
        });
      });
    };

    // Hover Tab Effect
    const initHoverTab = () => {
      const hoverTabs = document.querySelectorAll('.cs-hover_tab a');
      
      hoverTabs.forEach((tab) => {
        tab.addEventListener('mouseenter', () => {
          const parent = tab.closest('.cs-hover_tab');
          if (parent) {
            // Remove active from siblings
            const siblings = parent.parentElement.querySelectorAll('.cs-hover_tab');
            siblings.forEach((sibling) => sibling.classList.remove('active'));
            
            // Add active to current
            parent.classList.add('active');
          }
        });
      });
    };

    // Portfolio hover effects
    const initPortfolioEffects = () => {
      const portfolioItems = document.querySelectorAll('.cs-portfolio.cs-style2 .cs-text_btn');
      
      portfolioItems.forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          const portfolio = btn.closest('.cs-portfolio');
          const img = portfolio?.querySelector('.cs-portfolio_img');
          if (img) {
            img.classList.add('active');
          }
        });
        
        btn.addEventListener('mouseleave', () => {
          const portfolio = btn.closest('.cs-portfolio');
          const img = portfolio?.querySelector('.cs-portfolio_img');
          if (img) {
            img.classList.remove('active');
          }
        });
      });
    };

    // Isotope Portfolio Filter
    const initIsotopeFilter = () => {
      const filterButtons = document.querySelectorAll('.cs-isotop_filter [data-filter]');
      const isotopeContainer = document.querySelector('.cs-isotop');
      
      if (filterButtons.length && isotopeContainer) {
        // Calculate and set fixed container height once
        let fixedContainerHeight = null;
        
        const setFixedContainerHeight = () => {
          if (fixedContainerHeight === null) {
            // First time - calculate maximum possible height
            const allItems = isotopeContainer.querySelectorAll('.cs-isotop_item');
            let maxHeight = 0;
            
            allItems.forEach((item) => {
              // Temporarily show all items to measure
              const originalDisplay = item.style.display;
              item.style.display = 'block';
              item.style.float = 'left';
              
              // eslint-disable-next-line no-unused-expressions
              isotopeContainer.offsetHeight;
              
              const rect = item.getBoundingClientRect();
              const containerRect = isotopeContainer.getBoundingClientRect();
              const itemBottom = rect.bottom - containerRect.top;
              maxHeight = Math.max(maxHeight, itemBottom);
              
              // Restore original state
              item.style.display = originalDisplay;
            });
            
            fixedContainerHeight = maxHeight + 150; // Add padding
            isotopeContainer.style.height = `${fixedContainerHeight}px`;
            isotopeContainer.style.minHeight = `${fixedContainerHeight}px`;
          }
        };
        
        // Set fixed height on initialization
        setTimeout(setFixedContainerHeight, 100);
        
        filterButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            const allItems = isotopeContainer.querySelectorAll('.cs-isotop_item');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.parentElement.classList.remove('active'));
            // Add active class to clicked button
            button.parentElement.classList.add('active');
            
            // Show/hide items based on filter
            allItems.forEach((item) => {
              // Remove any existing filtered class first
              item.classList.remove('cs-isotope-filtered');
              
              if (filterValue === '*') {
                // Show all items
                item.style.display = 'block';
                item.style.float = 'left';
              } else {
                const filterClass = filterValue.replace('.', '');
                if (item.classList.contains(filterClass)) {
                  // Show matching items
                  item.style.display = 'block';
                  item.style.float = 'left';
                } else {
                  // Hide non-matching items
                  item.style.display = 'none';
                  item.style.float = '';
                }
              }
            });

            // Fix container height to prevent CTA jumping
            if (fixedContainerHeight) {
              isotopeContainer.style.height = `${fixedContainerHeight}px`;
              isotopeContainer.style.minHeight = `${fixedContainerHeight}px`;
            } else {
              // Check if height was set by Portfolio.js
              const storedHeight = isotopeContainer.getAttribute('data-fixed-height');
              if (storedHeight) {
                isotopeContainer.style.height = `${storedHeight}px`;
                isotopeContainer.style.minHeight = `${storedHeight}px`;
              } else {
                // Fallback if height not calculated yet
                setTimeout(setFixedContainerHeight, 50);
              }
            }
          });
        });
      }
    };

    // Portfolio layout'ı başlatmak için ek fonksiyon
    const initPortfolioLayout = () => {
      const isotopeContainer = document.querySelector('.cs-isotop');
      const allItems = document.querySelectorAll('.cs-isotop_item');
      
      if (isotopeContainer && allItems.length) {
        // Tüm itemları temizle ve görünür yap
        allItems.forEach((item) => {
          item.style.display = 'block';
          item.style.float = 'left';
          item.classList.remove('cs-isotope-filtered');
        });

        // Layout'ı yeniden hesapla
        requestAnimationFrame(() => {
          // Force container height recalculation
          isotopeContainer.style.height = 'auto';
          isotopeContainer.style.minHeight = 'auto';
          // eslint-disable-next-line no-unused-expressions
          isotopeContainer.offsetHeight;
          
          // Calculate proper container height
          setTimeout(() => {
            const visibleItems = Array.from(allItems).filter(item => {
              const style = window.getComputedStyle(item);
              return style.display !== 'none' && item.offsetHeight > 0;
            });
            
            if (visibleItems.length > 0) {
              let maxBottom = 0;
              visibleItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const containerRect = isotopeContainer.getBoundingClientRect();
                const itemBottom = rect.bottom - containerRect.top;
                maxBottom = Math.max(maxBottom, itemBottom);
              });
              
              const calculatedHeight = maxBottom + 100;
              isotopeContainer.style.minHeight = `${calculatedHeight}px`;
              isotopeContainer.style.height = `${calculatedHeight}px`;
            }
          }, 150);
        });
      }
    };

    // Initialize all interactive effects
    initTabs();
    initAccordion();
    initModalVideo();
    initHobbleEffect();
    initHoverTab();
    initPortfolioEffects();
    initIsotopeFilter();
    
    // Portfolio sayfasında layout'ı başlat
    if (locationPath === '/portfolio') {
      setTimeout(initPortfolioLayout, 150);
    }

  }, [locationPath]);
};

export default useInteractiveEffects;
