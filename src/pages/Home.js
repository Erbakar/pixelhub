import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { blogPosts } from '../data/blogData';

const Home = () => {
  const blogPostsArray = Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PixelHub",
    "description": "Creative digital agency specializing in web design, development, and digital marketing",
    "url": "https://pixelhub.com",
    "logo": "https://pixelhub.com/assets/img/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 454 7800 112",
      "contactType": "customer service",
      "email": "info@pixelhub.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Wall Street Suite, 44150",
      "addressLocality": "Ohio",
      "addressCountry": "United States"
    },
    "sameAs": [
      "https://linkedin.com/company/pixelhub",
      "https://twitter.com/pixelhub",
      "https://facebook.com/pixelhub",
      "https://instagram.com/pixelhub"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "UI/UX Design",
        "description": "Professional user interface and user experience design services"
      },
      {
        "@type": "Service", 
        "name": "Web Development",
        "description": "Custom website development and web application solutions"
      },
      {
        "@type": "Service",
        "name": "Mobile App Development", 
        "description": "Native and cross-platform mobile application development"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "Comprehensive digital marketing and SEO optimization services"
      }
    ]
  };

  return (
    <div>
      <SEO 
        title="PixelHub - Creative Digital Agency | Web Design & Development"
        description="Transform your business with PixelHub's professional web design, UI/UX design, mobile app development, and digital marketing services. Get a quote today!"
        keywords="web design, UI/UX design, mobile app development, digital marketing, creative agency, web development, branding, SEO optimization"
        url="https://pixelhub.com/"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1" data-src="/assets/img/hero_bg.jpeg" id="home">
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="container">
          <div className="cs-hero_text">
            <h1 className="cs-hero_title wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.2s">
              Creativity In <br />Our Blood Line
            </h1>
            <div className="cs-hero_info">
              <div>
                <Link to="/contact" className="cs-text_btn">
                  <span>Get a Quote</span>
                  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
              <div>
                <div className="cs-hero_subtitle">
                  We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-hero_social_wrap cs-primary_font cs-primary_color">
          <div className="cs-hero_social_title">Follow Us</div>
          <ul className="cs-hero_social_links">
            <li>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
          </ul>
        </div>
        <a href="#service" className="cs-down_btn">
          <svg width="20" height="20"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0L10 18L14 14" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 18L6 14" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>

      {/* Fun Facts Section */}
      <section>
        <div className="container">
          <div className="cs-funfact_wrap cs-type1">
            <div className="cs-funfact_shape" data-src="/assets/img/funfact_shape_bg.svg"></div>
            <div className="cs-funfact_left">
              <div className="cs-funfact_heading">
                <h2>Our fun fact</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
            <div className="cs-funfact_right">
              <div className="cs-funfacts">
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number">
                    <span className="odometer" data-count-to="40">00</span>K
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">Global Happy Clients</span>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number">
                    <span className="odometer" data-count-to="50">00</span>K
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">Project Completed</span>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number">
                    <span className="odometer" data-count-to="245">00</span>
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">Team Members</span>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number">
                    <span className="odometer" data-count-to="550">00</span>
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">Digital products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service">
        <div className="cs-height_150 cs-height_lg_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">What Can We Do</h3>
                <h2 className="cs-section_title">Services we can help you with</h2>
                <div className="cs-height_45 cs-height_lg_20"></div>
                <Link to="/services" className="cs-text_btn wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  <span>See All Services</span>
                  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
              <div className="cs-height_90 cs-height_lg_45"></div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <Link to="/services" className="cs-card cs-style1 cs-hover_layer1">
                      <img src="/assets/img/service_1.jpeg" alt="Service" />
                      <div className="cs-card_overlay"></div>
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg"></span>
                        <h2 className="cs-card_title">UI/UX design</h2>
                      </div>
                    </Link>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30"></div>
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <Link to="/services" className="cs-card cs-style1 cs-hover_layer1">
                      <img src="/assets/img/service_2.jpeg" alt="Service" />
                      <div className="cs-card_overlay"></div>
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg"></span>
                        <h2 className="cs-card_title">React.js Development</h2>
                      </div>
                    </Link>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30"></div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <Link to="/services" className="cs-card cs-style1 cs-hover_layer1">
                      <img src="/assets/img/service_3.jpeg" alt="Service" />
                      <div className="cs-card_overlay"></div>
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg"></span>
                        <h2 className="cs-card_title">Digital Marketing</h2>
                      </div>
                    </Link>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30"></div>
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <Link to="/services" className="cs-card cs-style1 cs-hover_layer1">
                      <img src="/assets/img/service_4.jpeg" alt="Service" />
                      <div className="cs-card_overlay"></div>
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg"></span>
                        <h2 className="cs-card_title">Technology</h2>
                      </div>
                    </Link>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30"></div>
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_50"></div>
      </section>

      {/* Latest Projects Section */}
      <section>
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">Latest Projects</h3>
            <h2 className="cs-section_title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Portfolio to explore</h2>
          </div>
        </div>
        <div className="cs-height_90 cs-height_lg_45"></div>
        <div className="cs-slider cs-style3 cs-gap-24">
          <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="1" data-slides-per-view="1">
            <div className="cs-slider_wrapper">
              <div className="cs-slide">
                <Link to="/portfolio" className="cs-portfolio cs-style1 cs-bg">
                  <div className="cs-portfolio_hover"></div>
                  <div className="cs-portfolio_bg" data-src="/assets/img/portfolio_1.jpeg"></div>
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                    <h2 className="cs-portfolio_title">E-Commerce Dashboard</h2>
                    <div className="cs-portfolio_subtitle">UI/UX Design</div>
                  </div>
                </Link>
              </div>
              <div className="cs-slide">
                <Link to="/portfolio" className="cs-portfolio cs-style1 cs-bg">
                  <div className="cs-portfolio_hover"></div>
                  <div className="cs-portfolio_bg" data-src="/assets/img/portfolio_2.jpeg"></div>
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                    <h2 className="cs-portfolio_title">Corporate Website</h2>
                    <div className="cs-portfolio_subtitle">Web Development</div>
                  </div>
                </Link>
              </div>
              <div className="cs-slide">
                <Link to="/portfolio" className="cs-portfolio cs-style1 cs-bg">
                  <div className="cs-portfolio_hover"></div>
                  <div className="cs-portfolio_bg" data-src="/assets/img/portfolio_3.jpeg"></div>
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                    <h2 className="cs-portfolio_title">Food Delivery App</h2>
                    <div className="cs-portfolio_subtitle">Mobile Application</div>
                  </div>
                </Link>
              </div>
              <div className="cs-slide">
                <Link to="/portfolio" className="cs-portfolio cs-style1 cs-bg">
                  <div className="cs-portfolio_hover"></div>
                  <div className="cs-portfolio_bg" data-src="/assets/img/portfolio_4.jpeg"></div>
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                    <h2 className="cs-portfolio_title">Tech Startup Branding</h2>
                    <div className="cs-portfolio_subtitle">Logo Design</div>
                  </div>
                </Link>
              </div>
              <div className="cs-slide">
                <Link to="/portfolio" className="cs-portfolio cs-style1 cs-bg">
                  <div className="cs-portfolio_hover"></div>
                  <div className="cs-portfolio_bg" data-src="/assets/img/portfolio_5.jpeg"></div>
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                    <h2 className="cs-portfolio_title">Banking App Interface</h2>
                    <div className="cs-portfolio_subtitle">UI/UX Design</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="cs-pagination cs-style1"></div>
        </div>
      </section>

      <div className="cs-height_150 cs-height_lg_80"></div>

      {/* Awards Section */}
      <section className="cs-shape_wrap_2">
        <div className="cs-shape_2">
          <div></div>
        </div>
        <div className="container">
          <div className="cs-slider cs-style1 cs-gap-24">
            <div className="cs-slider_left">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s">Our Awards</h3>
                <h2 className="cs-section_title">We get multiple awards</h2>
              </div>
              <div className="cs-height_45 cs-height_lg_20"></div>
              <div className="cs-slider_arrows cs-style1 cs-primary_color">
                <div className="cs-left_arrow cs-center">
                  <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.469791 5.96967C0.176899 6.26256 0.176899 6.73744 0.469791 7.03033L5.24276 11.8033C5.53566 12.0962 6.01053 12.0962 6.30342 11.8033C6.59632 11.5104 6.59632 11.0355 6.30342 10.7426L2.06078 6.5L6.30342 2.25736C6.59632 1.96447 6.59632 1.48959 6.30342 1.1967C6.01053 0.903806 5.53566 0.903806 5.24276 1.1967L0.469791 5.96967ZM26.0001 5.75L1.00012 5.75V7.25L26.0001 7.25V5.75Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="cs-right_arrow cs-center">
                  <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5305 7.03033C25.8233 6.73744 25.8233 6.26256 25.5305 5.96967L20.7575 1.1967C20.4646 0.903806 19.9897 0.903806 19.6968 1.1967C19.4039 1.48959 19.4039 1.96447 19.6968 2.25736L23.9395 6.5L19.6968 10.7426C19.4039 11.0355 19.4039 11.5104 19.6968 11.8033C19.9897 12.0962 20.4646 12.0962 20.7575 11.8033L25.5305 7.03033ZM0.00012207 7.25H25.0001V5.75H0.00012207V7.25Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="cs-slider_right">
              <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lg-slides="2" data-add-slides="2">
                <div className="cs-slider_wrapper">
                  <div className="cs-slide">
                    <div className="cs-time_line cs-style1">
                      <h3 className="cs-accent_color">2019</h3>
                      <h2>Google awards</h2>
                      <p>Website of the day</p>
                      <p>Mobile excellence</p>
                    </div>
                    <div className="cs-height_40 cs-height_lg_30"></div>
                    <div className="cs-time_line cs-style1">
                      <h3 className="cs-accent_color">2021</h3>
                      <h2>CSS awards design</h2>
                      <p>Honorable mention</p>
                      <p>Desktop excellence</p>
                    </div>
                  </div>
                  <div className="cs-slide">
                    <div className="cs-time_line cs-style1">
                      <h3 className="cs-accent_color">2020</h3>
                      <h2>Awwwards</h2>
                      <p>Site of the day</p>
                      <p>Developer award</p>
                    </div>
                    <div className="cs-height_40 cs-height_lg_30"></div>
                    <div className="cs-time_line cs-style1">
                      <h3 className="cs-accent_color">2022</h3>
                      <h2>FWA awards</h2>
                      <p>Mobile of the day</p>
                      <p>Site of the month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_150 cs-height_lg_80"></div>

      {/* Team Section */}
      <section>
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">Our Team</h3>
            <h2 className="cs-section_title">Awesome team members</h2>
          </div>
          <div className="cs-height_55 cs-height_lg_40"></div>
          <div className="cs-slider cs-style1 cs-gap-24">
            <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="3" data-lg-slides="4" data-add-slides="4">
              <div className="cs-slider_wrapper">
                <div className="cs-slide">
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
                </div>
                <div className="cs-slide">
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
                </div>
                <div className="cs-slide">
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
                </div>
                <div className="cs-slide">
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
                </div>
              </div>
            </div>
            <div className="cs-pagination cs-style1"></div>
          </div>
        </div>
      </section>

      <div className="cs-height_150 cs-height_lg_80"></div>

      {/* Testimonials Section */}
      <section className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <div className="cs-shape_3 cs-to_up">
          <svg width="162" height="181" viewBox="0 0 162 181" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M156.833 178.434C156.833 177.053 157.954 175.932 159.335 175.932C160.716 175.932 161.837 177.053 161.837 178.434C161.837 179.814 160.716 180.935 159.335 180.935C157.954 180.935 156.833 179.814 156.833 178.434Z" fill="#fd550e" />
            <path d="M117.65 178.434C117.65 177.053 118.771 175.932 120.152 175.932C121.533 175.932 122.653 177.053 122.653 178.434C122.653 179.814 121.533 180.935 120.152 180.935C118.771 180.935 117.65 179.814 117.65 178.434Z" fill="#fd550e" />
            <path d="M78.4694 178.434C78.4694 177.053 79.5902 175.932 80.971 175.932C82.3517 175.932 83.4726 177.053 83.4726 178.434C83.4726 179.814 82.3517 180.935 80.971 180.935C79.5876 180.935 78.4694 179.814 78.4694 178.434Z" fill="#fd550e" />
            <path d="M39.286 178.434C39.286 177.053 40.4069 175.932 41.7876 175.932C43.1684 175.932 44.2893 177.053 44.2893 178.434C44.2893 179.814 43.1684 180.935 41.7876 180.935C40.4069 180.935 39.286 179.814 39.286 178.434Z" fill="#fd550e" />
            <path d="M0.102661 178.434C0.102661 177.053 1.22354 175.932 2.60429 175.932C3.98504 175.932 5.10591 177.053 5.10591 178.434C5.10591 179.814 3.98504 180.935 2.60429 180.935C1.22091 180.935 0.102661 179.814 0.102661 178.434Z" fill="#fd550e" />
          </svg>
        </div>
        <div className="cs-height_130 cs-height_lg_80"></div>
        <div className="container">
          <div className="cs-testimonial_slider">
            <div className="cs-testimonial_slider_left">
              <div className="slider-nav cs-style1">
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img src="/assets/img/testimonial_1.jpeg" alt="Client testimonial" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img src="/assets/img/testimonial_2.jpeg" alt="Client testimonial" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img src="/assets/img/testimonial_3.jpeg" alt="Client testimonial" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-testimonial_slider_right">
              <div className="slider-for cs-style1">
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z" fill="white" />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.</div>
                    <div className="cs-rating" data-rating="4">
                      <div className="cs-rating_bg" data-src="/assets/img/rating.svg"></div>
                      <div className="cs-rating_percentage" data-src="/assets/img/rating.svg"></div>
                    </div>
                    <h2 className="cs-testimonial_avatar_name">Ahon Monsery</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">CEO AT TECH</div>
                  </div>
                </div>
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z" fill="white" />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">The customer support team at Arino is exceptional. They are responsive, knowledgeable, and genuinely care about helping users succeed. Creative agency delivers outstanding results every time.</div>
                    <div className="cs-rating" data-rating="5">
                      <div className="cs-rating_bg" data-src="/assets/img/rating.svg"></div>
                      <div className="cs-rating_percentage" data-src="/assets/img/rating.svg"></div>
                    </div>
                    <h2 className="cs-testimonial_avatar_name">Wade Warren</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">CEO AT DESIGN</div>
                  </div>
                </div>
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z" fill="white" />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">One of the standout features of Arino is its intuitive and user-friendly interface. Navigating through the platform is a breeze, even for those who aren't tech-savvy. Amazing work!</div>
                    <div className="cs-rating" data-rating="5">
                      <div className="cs-rating_bg" data-src="/assets/img/rating.svg"></div>
                      <div className="cs-rating_percentage" data-src="/assets/img/rating.svg"></div>
                    </div>
                    <h2 className="cs-testimonial_avatar_name">Albert Flores</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">SOFTWARE ENGINEER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_130 cs-height_lg_80"></div>
      </section>

      <div className="cs-height_150 cs-height_lg_80"></div>

      {/* Blog Section */}
      <section className="cs-shape_wrap_4 cs-parallax">
        <div className="cs-shape_4 cs-to_up"></div>
        <div className="cs-shape_4 cs-to_right"></div>
        <div className="cs-height_150 cs-height_lg_80"></div>
        <div className="container">
          <div className="cs-slider cs-style1 cs-gap-24">
            <div className="cs-slider_left">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">Our Blog</h3>
                <h2 className="cs-section_title">Explore recent publication</h2>
                <div className="cs-height_45 cs-height_lg_20"></div>
                <Link to="/blog" className="cs-text_btn wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  <span>View More Blog</span>
                  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="cs-slider_right">
              <div className="cs-post_wrap">
                <div className="cs-slider_container" data-autoplay="1" data-loop="1" data-speed="1000" data-center="0" data-variable-width="1" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lg-slides="2" data-add-slides="3">
                  <div className="cs-slider_wrapper">
                    {blogPostsArray.slice(0, 5).map((post) => (
                      <div key={post.slug} className="cs-slide">
                        <div className="cs-post cs-style1" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                          <Link to={`/blog/${post.slug}`} className="cs-post_thumb">
                            <img src={post.image} alt={post.title} />
                            <div className="cs-post_overlay"></div>
                          </Link>
                          <div className="cs-post_info" style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
                            <div className="cs-posted_by">{post.date}</div>
                            <h2 className="cs-post_title" style={{flex: '1'}}>
                              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cs-pagination cs-style1 cs-hidden_desktop"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_125 cs-height_lg_70"></div>
      </section>

      <div className="cs-height_150 cs-height_lg_80"></div>

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

export default Home;
