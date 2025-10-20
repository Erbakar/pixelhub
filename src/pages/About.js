import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div>
      <SEO 
        title="About Us - PixelHub Creative Digital Agency"
        description="Learn about PixelHub's journey, our expert team, and our commitment to delivering exceptional digital solutions for businesses worldwide."
        keywords="about pixelhub, creative agency team, digital agency, web design company, our story"
        url="https://pixelhub.com/about"
      />
      <div className="cs-page_heading cs-bg cs-center" data-src="/assets/img/about_hero_bg.jpeg">
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">About Us</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">About</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="cs-height_150 cs-height_lg_80"></div>
      
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4 offset-xl-1">
              <div className="cs-image_layer cs-style1">
                <div className="cs-image_layer_in">
                  <img src="/assets/img/about_img_1.jpeg" alt="About" className="w-100 cs-radius_15" />
                  <div className="cs-image_layer_overlay cs-accent_bg"></div>
                  <div className="cs-image_layer_content">
                    <div className="cs-percentage cs-accent_color">
                      <div className="cs-percentage_in">
                        <h2>25</h2>
                        <span className="cs-percentage_text">Years Of Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25"></div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">About Our Agency</h3>
                <h2 className="cs-section_title">Your partner for software innovation</h2>
                <div className="cs-height_30 cs-height_lg_20"></div>
                <p className="cs-m0">
                  Our company has been the leading provided of construction services to clients throughout the USA for over 25 years. We are dedicated to providing our customers with exceptional service while offering our employees the best training.
                </p>
                <div className="cs-height_15 cs-height_lg_15"></div>
                <p className="cs-m0">
                  We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences, and print materials.
                </p>
                <div className="cs-height_25 cs-height_lg_25"></div>
                <div className="cs-separator cs-accent_bg"></div>
                <div className="cs-height_25 cs-height_lg_25"></div>
                <Link to="/contact" className="cs-text_btn">
                  <span>Send Us A Message</span>
                  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>

      <section>
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">Our Team</h3>
            <h2 className="cs-section_title">Awesome team members</h2>
          </div>
          <div className="cs-height_55 cs-height_lg_40"></div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-team cs-style1">
                <div className="cs-member_thumb">
                  <img src="/assets/img/member_1.jpeg" alt="Member" />
                  <div className="cs-member_overlay"></div>
                  <div className="cs-member_btn">
                    <span className="cs-plus"></span>
                  </div>
                </div>
                <div className="cs-member_info">
                  <h2 className="cs-member_name">
                    <a href="/team">Melon Bulgery</a>
                  </h2>
                  <div className="cs-member_designation">Product Designer</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25"></div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-team cs-style1">
                <div className="cs-member_thumb">
                  <img src="/assets/img/member_2.jpeg" alt="Member" />
                  <div className="cs-member_overlay"></div>
                  <div className="cs-member_btn">
                    <span className="cs-plus"></span>
                  </div>
                </div>
                <div className="cs-member_info">
                  <h2 className="cs-member_name">
                    <a href="/team">Entoni Doe</a>
                  </h2>
                  <div className="cs-member_designation">Laravel Developer</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25"></div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-team cs-style1">
                <div className="cs-member_thumb">
                  <img src="/assets/img/member_3.jpeg" alt="Member" />
                  <div className="cs-member_overlay"></div>
                  <div className="cs-member_btn">
                    <span className="cs-plus"></span>
                  </div>
                </div>
                <div className="cs-member_info">
                  <h2 className="cs-member_name">
                    <a href="/team">Anjelina Joli</a>
                  </h2>
                  <div className="cs-member_designation">WP Developer</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25"></div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-team cs-style1">
                <div className="cs-member_thumb">
                  <img src="/assets/img/member_4.jpeg" alt="Member" />
                  <div className="cs-member_overlay"></div>
                  <div className="cs-member_btn">
                    <span className="cs-plus"></span>
                  </div>
                </div>
                <div className="cs-member_info">
                  <h2 className="cs-member_name">
                    <a href="/team">Jhon Doe</a>
                  </h2>
                  <div className="cs-member_designation">React Developer</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
