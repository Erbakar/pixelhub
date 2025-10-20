import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTA from '../components/CTA';

const Services = () => {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "PixelHub"
    },
    "serviceType": "Digital Agency Services",
    "description": "Comprehensive digital services including web design, development, mobile apps, and digital marketing",
    "offers": [
      {
        "@type": "Offer",
        "name": "UI/UX Design",
        "description": "Professional user interface and user experience design services"
      },
      {
        "@type": "Offer", 
        "name": "Web Development",
        "description": "Custom website development and web application solutions"
      },
      {
        "@type": "Offer",
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile application development"
      }
    ]
  };

  return (
    <div>
      <SEO 
        title="Our Services - PixelHub Digital Agency | Web Design & Development"
        description="Explore PixelHub's comprehensive digital services: UI/UX design, web development, mobile apps, digital marketing, branding, and SEO optimization."
        keywords="digital services, web design services, UI/UX design, mobile app development, digital marketing, SEO services, branding services"
        url="https://pixelhub.com/services"
        structuredData={servicesStructuredData}
      />
      <div className="cs-page_heading cs-bg cs-center" data-src="/assets/img/service_hero_bg.jpeg">
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">Services</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Services</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="cs-height_150 cs-height_lg_80"></div>
      
      <section>
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">What Can We Do</h3>
            <h2 className="cs-section_title">Services we can help you with</h2>
            <div className="cs-height_30 cs-height_lg_20"></div>
            <p className="cs-m0">
              We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences, and print materials.
            </p>
          </div>
          <div className="cs-height_70 cs-height_lg_50"></div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.5 31H63.5C63.5 14.5 50 1 33.5 1V4C48.4 4 60.5 16.1 60.5 31H66.5Z" fill="#fd550e" />
                    <path d="M33.5 16V13C42.9 13 50.5 20.6 50.5 30H53.5C53.5 19 44.5 10 33.5 10V16Z" fill="#fd550e" />
                    <path d="M33.5 25V22C37.1 22 40 24.9 40 28.5H43C43 23.3 38.7 19 33.5 19V25Z" fill="#fd550e" />
                    <circle cx="33.5" cy="33.5" r="8.5" fill="#fd550e" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">UI/UX Design</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.5 10.5H11.5C9.3 10.5 7.5 12.3 7.5 14.5V52.5C7.5 54.7 9.3 56.5 11.5 56.5H55.5C57.7 56.5 59.5 54.7 59.5 52.5V14.5C59.5 12.3 57.7 10.5 55.5 10.5Z" stroke="#fd550e" strokeWidth="3" fill="none" />
                    <path d="M7.5 22.5H59.5" stroke="#fd550e" strokeWidth="3" />
                    <circle cx="15.5" cy="16.5" r="2" fill="#fd550e" />
                    <circle cx="23.5" cy="16.5" r="2" fill="#fd550e" />
                    <circle cx="31.5" cy="16.5" r="2" fill="#fd550e" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Web Development</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.5 12.5H20.5C18.3 12.5 16.5 14.3 16.5 16.5V50.5C16.5 52.7 18.3 54.5 20.5 54.5H46.5C48.7 54.5 50.5 52.7 50.5 50.5V16.5C50.5 14.3 48.7 12.5 46.5 12.5Z" stroke="#fd550e" strokeWidth="3" fill="none" />
                    <path d="M33.5 45.5C35.7 45.5 37.5 43.7 37.5 41.5C37.5 39.3 35.7 37.5 33.5 37.5C31.3 37.5 29.5 39.3 29.5 41.5C29.5 43.7 31.3 45.5 33.5 45.5Z" fill="#fd550e" />
                    <path d="M21.5 20.5H45.5" stroke="#fd550e" strokeWidth="3" />
                    <path d="M21.5 25.5H45.5" stroke="#fd550e" strokeWidth="3" />
                    <path d="M21.5 30.5H45.5" stroke="#fd550e" strokeWidth="3" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Mobile Application</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.5 58.5C47.5 58.5 58.5 47.5 58.5 33.5C58.5 19.5 47.5 8.5 33.5 8.5C19.5 8.5 8.5 19.5 8.5 33.5C8.5 47.5 19.5 58.5 33.5 58.5Z" stroke="#fd550e" strokeWidth="3" fill="none" />
                    <path d="M33.5 22.5V33.5L42.5 42.5" stroke="#fd550e" strokeWidth="3" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Digital Marketing</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.5 8.5L41.5 24.5L58.5 26.5L46 38.5L49 55.5L33.5 47L18 55.5L21 38.5L8.5 26.5L25.5 24.5L33.5 8.5Z" stroke="#fd550e" strokeWidth="3" fill="none" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Brand Identity</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 8.5H58.5V58.5H8.5V8.5Z" stroke="#fd550e" strokeWidth="3" fill="none" />
                    <path d="M18.5 28.5L28.5 38.5L48.5 18.5" stroke="#fd550e" strokeWidth="3" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">SEO Optimization</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 33.5H25.5M41.5 33.5H58.5M33.5 8.5V25.5M33.5 41.5V58.5" stroke="#fd550e" strokeWidth="3" />
                    <circle cx="33.5" cy="33.5" r="8.5" stroke="#fd550e" strokeWidth="3" fill="none" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Content Writing</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="cs-iconbox cs-style1 text-center">
                <div className="cs-icon">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.5 58.5C47.5 58.5 58.5 47.5 58.5 33.5C58.5 19.5 47.5 8.5 33.5 8.5C19.5 8.5 8.5 19.5 8.5 33.5C8.5 47.5 19.5 58.5 33.5 58.5Z" stroke="#fd550e" strokeWidth="3" fill="none" />
                    <path d="M33.5 18.5V33.5L43.5 43.5" stroke="#fd550e" strokeWidth="3" />
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Social Marketing</h2>
                <div className="cs-iconbox_subtitle">We provide digital experience services to startups and small businesses looking to make an impact.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>

      {/* How We Work Section */}
      <section>
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">Our Process</h3>
            <h2 className="cs-section_title">How We Work</h2>
            <div className="cs-height_30 cs-height_lg_20"></div>
            <p className="cs-m0">
              We follow a proven process to deliver exceptional results for our clients. Our systematic approach ensures quality and efficiency at every step.
            </p>
          </div>
          <div className="cs-height_70 cs-height_lg_50"></div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-iconbox cs-style7 text-center">
                <div className="cs-iconbox_icon cs-center">
                  <h3>01</h3>
                </div>
                <h2 className="cs-iconbox_title">Discovery</h2>
                <div className="cs-iconbox_subtitle">We start by understanding your business goals, target audience, and project requirements through detailed consultation.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-iconbox cs-style7 text-center">
                <div className="cs-iconbox_icon cs-center">
                  <h3>02</h3>
                </div>
                <h2 className="cs-iconbox_title">Planning</h2>
                <div className="cs-iconbox_subtitle">We create a comprehensive strategy and project roadmap with clear milestones and deliverables.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-iconbox cs-style7 text-center">
                <div className="cs-iconbox_icon cs-center">
                  <h3>03</h3>
                </div>
                <h2 className="cs-iconbox_title">Execution</h2>
                <div className="cs-iconbox_subtitle">Our expert team brings your vision to life with cutting-edge design and development techniques.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-iconbox cs-style7 text-center">
                <div className="cs-iconbox_icon cs-center">
                  <h3>04</h3>
                </div>
                <h2 className="cs-iconbox_title">Delivery</h2>
                <div className="cs-iconbox_subtitle">We thoroughly test and launch your project, providing ongoing support and maintenance as needed.</div>
              </div>
              <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>

      {/* Why Choose Us Section */}
      <section className="cs-gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">Why Choose Us</h3>
                <h2 className="cs-section_title">We are committed to providing our customers with exceptional service.</h2>
                <div className="cs-height_30 cs-height_lg_20"></div>
                <p className="cs-m0">
                  With years of experience and a proven track record, we deliver innovative solutions that drive business growth and exceed expectations.
                </p>
              </div>
              <div className="cs-height_45 cs-height_lg_30"></div>
            </div>
            <div className="col-lg-7 offset-xl-1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cs-iconbox cs-style6">
                    <div className="cs-iconbox_icon cs-accent_bg">
                      <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.5 14.5C29.5 22.5 23 28.5 15 28.5C7 28.5 0.5 22.5 0.5 14.5C0.5 6.5 7 0.5 15 0.5C23 0.5 29.5 6.5 29.5 14.5Z" stroke="white"/>
                        <path d="M9.5 14.5L13.5 18.5L20.5 10.5" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="cs-iconbox_right">
                      <h2 className="cs-iconbox_title cs-font_18 cs-font_18">Expert Team</h2>
                      <div className="cs-iconbox_subtitle">Our skilled professionals bring years of industry experience to every project.</div>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30"></div>
                  <div className="cs-iconbox cs-style6">
                    <div className="cs-iconbox_icon cs-accent_bg">
                      <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0.5L19 11.5L30 13L21 21.5L23.5 28.5L15 24L6.5 28.5L9 21.5L0 13L11 11.5L15 0.5Z" stroke="white"/>
                      </svg>
                    </div>
                    <div className="cs-iconbox_right">
                      <h2 className="cs-iconbox_title cs-font_18 cs-font_18">Quality Assurance</h2>
                      <div className="cs-iconbox_subtitle">We maintain the highest standards of quality in every deliverable.</div>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
                <div className="col-lg-6">
                  <div className="cs-iconbox cs-style6">
                    <div className="cs-iconbox_icon cs-accent_bg">
                      <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 28.5C22.5 28.5 28.5 22.5 28.5 15C28.5 7.5 22.5 1.5 15 1.5C7.5 1.5 1.5 7.5 1.5 15C1.5 22.5 7.5 28.5 15 28.5Z" stroke="white"/>
                        <path d="M15 7.5V15L21 21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="cs-iconbox_right">
                      <h2 className="cs-iconbox_title cs-font_18 cs-font_18">Timely Delivery</h2>
                      <div className="cs-iconbox_subtitle">We respect deadlines and deliver projects on time, every time.</div>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30"></div>
                  <div className="cs-iconbox cs-style6">
                    <div className="cs-iconbox_icon cs-accent_bg">
                      <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1.5C22.5 1.5 28.5 7.5 28.5 15C28.5 22.5 22.5 28.5 15 28.5C7.5 28.5 1.5 22.5 1.5 15C1.5 7.5 7.5 1.5 15 1.5Z" stroke="white"/>
                        <path d="M9.5 15L13.5 19L20.5 11" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="cs-iconbox_right">
                      <h2 className="cs-iconbox_title cs-font_18 cs-font_18">24/7 Support</h2>
                      <div className="cs-iconbox_subtitle">Our dedicated support team is available round the clock for assistance.</div>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>

      {/* FAQ Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">Have Any Questions?</h3>
                <h2 className="cs-section_title">Frequently Asked Questions</h2>
                <div className="cs-height_30 cs-height_lg_20"></div>
                <p className="cs-m0">
                  Find answers to common questions about our services. Can't find what you're looking for? Contact us directly.
                </p>
              </div>
              <div className="cs-height_45 cs-height_lg_30"></div>
            </div>
            <div className="col-lg-7 offset-xl-1">
              <div className="cs-accordians cs-style1">
                <div className="cs-accordian active">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">What services do you offer?</h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                    We offer a comprehensive range of digital services including UI/UX design, web development, mobile applications, digital marketing, brand identity, SEO optimization, content writing, and social media marketing.
                  </div>
                </div>
                <div className="cs-accordian">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">How long does a typical project take?</h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                    Project timelines vary depending on scope and complexity. A simple website typically takes 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during the planning phase.
                  </div>
                </div>
                <div className="cs-accordian">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">Do you provide ongoing support?</h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                    Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security monitoring, performance optimization, and technical support to ensure your project continues to perform optimally.
                  </div>
                </div>
                <div className="cs-accordian">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">What is your pricing structure?</h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                    Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed quotes after understanding your requirements. We also offer flexible payment plans to accommodate different budgets.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>
      
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

export default Services;
