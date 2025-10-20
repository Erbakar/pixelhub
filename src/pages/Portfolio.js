import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTA from '../components/CTA';

const Portfolio = () => {
  // Portfolio sayfasına özel layout düzeltme
  useEffect(() => {
    const initializePortfolioLayout = () => {
      const isotopeContainer = document.querySelector('.cs-isotop');
      const allItems = document.querySelectorAll('.cs-isotop_item');
      
      if (isotopeContainer && allItems.length) {
        // Tüm itemları görünür yap ve layout'ı sıfırla
        allItems.forEach((item) => {
          item.style.display = 'block';
          item.style.opacity = '1';
          item.style.visibility = 'visible';
          item.style.transform = '';
          item.style.position = '';
          item.style.pointerEvents = '';
          item.style.float = 'left';
          item.classList.remove('cs-isotope-filtered');
        });

        // Layout'ı yeniden hesapla ve sabit yükseklik belirle
        requestAnimationFrame(() => {
          // Filter butonlarını doğru state'e getir
          const filterButtons = document.querySelectorAll('.cs-isotop_filter [data-filter]');
          filterButtons.forEach(btn => {
            btn.parentElement.classList.remove('active');
          });
          
          // "All" butonunu aktif yap
          const allButton = document.querySelector('.cs-isotop_filter [data-filter="*"]');
          if (allButton && allButton.parentElement) {
            allButton.parentElement.classList.add('active');
          }
          
          // Calculate maximum possible height (when all items are visible)
          setTimeout(() => {
            let maxHeight = 0;
            allItems.forEach((item) => {
              // Force all items visible for measurement
              item.style.display = 'block';
              item.style.float = 'left';
            });
            
            // eslint-disable-next-line no-unused-expressions
            isotopeContainer.offsetHeight;
            
            // Calculate maximum height
            allItems.forEach((item) => {
              const rect = item.getBoundingClientRect();
              const containerRect = isotopeContainer.getBoundingClientRect();
              const itemBottom = rect.bottom - containerRect.top;
              maxHeight = Math.max(maxHeight, itemBottom);
            });
            
            // Set fixed height to prevent CTA jumping
            const fixedHeight = maxHeight + 150;
            isotopeContainer.style.height = `${fixedHeight}px`;
            isotopeContainer.style.minHeight = `${fixedHeight}px`;
            
            // Store fixed height for later use
            isotopeContainer.setAttribute('data-fixed-height', fixedHeight);
            
          }, 200);
        });
      }
    };

    // Sayfa yüklendiğinde layout'ı başlat
    const timer = setTimeout(initializePortfolioLayout, 100);
    
    // Cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SEO 
        title="Portfolio - PixelHub Creative Works | Web Design & Development Projects"
        description="Explore PixelHub's portfolio of creative projects including UI/UX designs, web development, mobile apps, and branding solutions for various industries."
        keywords="portfolio, web design projects, UI/UX portfolio, mobile app portfolio, creative projects, design showcase"
        url="https://pixelhub.com/portfolio"
        type="website"
      />
      <div className="cs-page_heading cs-bg cs-center" data-src="/assets/img/portfolio_hero_bg.jpeg">
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">Portfolio</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Portfolio</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="cs-height_150 cs-height_lg_80"></div>
      
      <section>
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">Our Portfolio</h3>
            <h2 className="cs-section_title">Some recent work</h2>
            <div className="cs-height_30 cs-height_lg_20"></div>
            <p className="cs-m0">
              Explore our diverse range of creative projects that showcase our expertise in design and development.
            </p>
          </div>
          <div className="cs-height_70 cs-height_lg_50"></div>
          
          <div className="cs-isotop_filter cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className="active">
                <button className="cs-filter-btn" data-filter="*">All</button>
              </li>
              <li>
                <button className="cs-filter-btn" data-filter=".ui_ux_design">UI/UX Design</button>
              </li>
              <li>
                <button className="cs-filter-btn" data-filter=".mobile_apps">Mobile Apps</button>
              </li>
              <li>
                <button className="cs-filter-btn" data-filter=".logo_design">Logo Design</button>
              </li>
              <li>
                <button className="cs-filter-btn" data-filter=".web_design">Web Design</button>
              </li>
            </ul>
          </div>
          <div className="cs-height_50 cs-height_lg_30"></div>
          
          <div className="cs-isotop cs-style1 cs-isotop_col_3 cs-has_gutter_24 portfolio-height" >
            <div className="cs-grid_sizer"></div>
            <div className="cs-isotop_item ui_ux_design"> 
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_1.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">E-Commerce Dashboard</h2>
                  <div className="cs-portfolio_subtitle">UI/UX Design</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item web_design">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_2.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Corporate Website</h2>
                  <div className="cs-portfolio_subtitle">Web Development</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item mobile_apps">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_3.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Food Delivery App</h2>
                  <div className="cs-portfolio_subtitle">Mobile Application</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item logo_design">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_4.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Tech Startup Branding</h2>
                  <div className="cs-portfolio_subtitle">Logo Design</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item ui_ux_design">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_5.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Banking App Interface</h2>
                  <div className="cs-portfolio_subtitle">UI/UX Design</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item web_design">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_6.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Real Estate Platform</h2>
                  <div className="cs-portfolio_subtitle">Web Development</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>
      
      {/* CTA Section */}
      <CTA 
        subtitle="Ready to Start?"
        title="Let's Work Together"
        description="Have a project in mind? We'd love to hear about it. Let's discuss your ideas and bring them to life."
        buttonText="Get In Touch Now &nbsp;"
        showDescription={true}
        layout="home" 
      />
    </div>
  );
};

export default Portfolio;
