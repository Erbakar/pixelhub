import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Portfolio = () => {
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
                <span data-filter="*">All</span>
              </li>
              <li>
                <span data-filter=".ui_ux_design">UI/UX Design</span>
              </li>
              <li>
                <span data-filter=".mobile_apps">Mobile Apps</span>
              </li>
              <li>
                <span data-filter=".logo_design">Logo Design</span>
              </li>
              <li>
                <span data-filter=".web_design">Web Design</span>
              </li>
            </ul>
          </div>
          <div className="cs-height_50 cs-height_lg_30"></div>
          
          <div className="cs-isotop cs-style1 cs-isotop_col_3 cs-has_gutter_24">
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
      <section className="cs-accent_bg">
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle cs-accent_color">Ready to Start?</h3>
            <h2 className="cs-section_title cs-white_color">Let's Work Together</h2>
            <div className="cs-height_30 cs-height_lg_20"></div>
            <p className="cs-white_color cs-m0">
              Have a project in mind? We'd love to hear about it. Let's discuss your ideas and bring them to life.
            </p>
            <div className="cs-height_30 cs-height_lg_20"></div>
            <Link to="/contact" className="cs-text_btn cs-type1">
              <span>Get In Touch</span>
              <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
