import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideHeaderOpen, setIsSideHeaderOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  
  // Check if current page is homepage
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Only enable sticky behavior on homepage
      if (!isHomepage) {
        setIsSticky(false);
        return;
      }
      
      const scrollTop = window.scrollY;
      // Use different thresholds for desktop and mobile
      const isMobile = window.innerWidth < 1200;
      const threshold = isMobile ? 50 : 100;
      
      setIsSticky(scrollTop > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHomepage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSideHeader = () => {
    setIsSideHeaderOpen(!isSideHeaderOpen);
  };

  return (
    <header className={`cs-site_header cs-style1 text-uppercase ${isSticky ? 'cs-sticky-active' : ''} ${!isHomepage ? 'cs-inner-page' : ''}`}>
      <div className="cs-main_header">
        <div className="container">
          <div className="cs-main_header_in">
            <div className="cs-main_header_left">
              <Link className="cs-site_branding" to="/">
                <img src="/assets/img/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="cs-main_header_center">
              <div className="cs-nav cs-primary_font cs-medium">
                <ul className={`cs-nav_list ${isMenuOpen ? 'cs-nav_list_open' : ''}`}>
                  <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">About</Link>
                  </li>
                  <li className={location.pathname === '/services' ? 'active' : ''}>
                    <Link to="/services">Services</Link>
                  </li>
                  <li className={location.pathname === '/portfolio' ? 'active' : ''}>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li className={location.pathname === '/blog' ? 'active' : ''}>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className={location.pathname === '/contact' ? 'active' : ''}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                <span className={`cs-munu_toggle ${isMenuOpen ? 'cs-toggle_active' : ''}`} onClick={toggleMenu}>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="cs-main_header_right">
              <div className="cs-toolbox">
                <span className="cs-icon_btn" onClick={toggleSideHeader}>
                  <span className="cs-icon_btn_in">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Header */}
      <div className={`cs-side_header ${isSideHeaderOpen ? 'active' : ''}`}>
        <button className="cs-close" onClick={() => setIsSideHeaderOpen(false)}></button>
        <div className="cs-side_header_overlay" onClick={() => setIsSideHeaderOpen(false)}></div>
        <div className="cs-side_header_in">
          <div className="cs-side_header_shape"></div>
          <Link className="cs-site_branding" to="/">
            <img src="/assets/img/footer_logo.png" alt="Logo" />
          </Link>
          <div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">Do you have a project in your <br /> mind? Keep connect us.</h2>
          </div>
          <div className="cs-side_header_box">
            <h3 className="cs-side_header_title cs-primary_color">Contact Us</h3>
            <ul className="cs-contact_info cs-style1 cs-mp0">
              <li>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.08 11.82 12.69 11.9 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.58C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM9 0V10L12 7H18V0H9Z" fill="#FF4A17" />
                </svg>
                <span>+44 454 7800 112</span>
              </li>
              <li>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6.98V16C20 17.1 19.1 18 18 18H2C0.9 18 0 17.1 0 16V4C0 2.9 0.9 2 2 2H12.1C12.04 2.32 12 2.66 12 3C12 4.48 12.65 5.79 13.67 6.71L10 9L2 4V6L10 11L15.3 7.68C15.84 7.88 16.4 8 17 8C18.13 8 19.16 7.61 20 6.98ZM14 3C14 4.66 15.34 6 17 6C18.66 6 20 4.66 20 3C20 1.34 18.66 0 17 0C15.34 0 14 1.34 14 3Z" fill="#FF4A17" />
                </svg>
                <span>infotech@arino.com</span>
              </li>
              <li>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#FF4A17" />
                </svg>
                <span>50 Wall Street Suite, 44150 <br />Ohio, United States</span>
              </li>
            </ul>
          </div>
          <div className="cs-side_header_box">
            <h3 className="cs-side_header_title cs-primary_color">Subscribe</h3>
            <div className="cs-newsletter cs-style1">
              <form action="#" className="cs-newsletter_form">
                <input type="email" className="cs-newsletter_input" placeholder="example@gmail.com" />
                <button className="cs-newsletter_btn">
                  <span>Send</span>
                </button>
              </form>
              <div className="cs-newsletter_text">At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.</div>
            </div>
          </div>
          <div className="cs-side_header_box">
            <div className="cs-social_btns cs-style1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cs-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.04799 13.7497H1.45647V5.4043H4.04799V13.7497ZM2.75084 4.2659C1.92215 4.2659 1.25 3.57952 1.25 2.75084C1.25 2.35279 1.40812 1.97105 1.68958 1.68958C1.97105 1.40812 2.35279 1.25 2.75084 1.25C3.14888 1.25 3.53063 1.40812 3.81209 1.68958C4.09355 1.97105 4.25167 2.35279 4.25167 2.75084C4.25167 3.57952 3.57924 4.2659 2.75084 4.2659ZM13.7472 13.7497H11.1613V9.68722C11.1613 8.71903 11.1417 7.4774 9.81389 7.4774C8.46652 7.4774 8.26004 8.5293 8.26004 9.61747V13.7497H5.67132V5.4043H8.15681V6.54269H8.19308C8.53906 5.887 9.38421 5.19503 10.6451 5.19503C13.2679 5.19503 13.75 6.92215 13.75 9.16546V13.7497H13.7472Z" fill="white" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cs-center">
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1.30078C12.5234 1.51172 12.0117 1.65234 11.4766 1.71484C12.0234 1.39844 12.4414 0.890625 12.6406 0.265625C12.1289 0.5625 11.5586 0.773438 10.9531 0.890625C10.4648 0.375 9.79688 0.0625 9.05469 0.0625C7.61719 0.0625 6.44531 1.23438 6.44531 2.67188C6.44531 2.88281 6.46875 3.08594 6.51562 3.28125C4.25781 3.17188 2.24219 2.13281 0.917969 0.5625C0.6875 0.953125 0.554688 1.39844 0.554688 1.87891C0.554688 2.78516 1.01562 3.58594 1.71484 4.05469C1.28906 4.03906 0.890625 3.92969 0.539062 3.73438V3.76562C0.539062 5.02734 1.4375 6.08203 2.625 6.32812C2.40234 6.38281 2.16406 6.41406 1.91797 6.41406C1.74609 6.41406 1.58203 6.39844 1.42578 6.36719C1.75781 7.40625 2.72266 8.16016 3.86719 8.18359C2.97656 8.88281 1.85547 9.29688 0.632812 9.29688C0.414062 9.29688 0.203125 9.28125 0 9.25781C1.15625 9.99219 2.52344 10.4375 3.99219 10.4375C9.04688 10.4375 11.8203 6.46094 11.8203 2.98828C11.8203 2.87109 11.8203 2.75391 11.8125 2.63672C12.3359 2.27344 12.7969 1.82031 13.1719 1.30078H13Z" fill="white" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cs-center">
                <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.76562 8.4375L10.2422 5.76562H7.65625V4.04688C7.65625 3.28125 8.03125 2.53906 9.21875 2.53906H10.3516V0.234375C10.3516 0.234375 9.25781 0.0390625 8.21094 0.0390625C6.02344 0.0390625 4.60938 1.35156 4.60938 3.75V5.76562H2.25V8.4375H4.60938V15H7.65625V8.4375H9.76562Z" fill="white" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cs-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 3.60938C5.39062 3.60938 3.60938 5.39062 3.60938 7.5C3.60938 9.60938 5.39062 11.3906 7.5 11.3906C9.60938 11.3906 11.3906 9.60938 11.3906 7.5C11.3906 5.39062 9.60938 3.60938 7.5 3.60938ZM7.5 10.0781C6.125 10.0781 5.01562 8.96875 5.01562 7.5C5.01562 6.03125 6.125 4.92188 7.5 4.92188C8.875 4.92188 9.98438 6.03125 9.98438 7.5C9.98438 8.96875 8.875 10.0781 7.5 10.0781ZM12.3906 3.46875C12.3906 3.96875 11.9844 4.375 11.4844 4.375C10.9844 4.375 10.5781 3.96875 10.5781 3.46875C10.5781 2.96875 10.9844 2.5625 11.4844 2.5625C11.9844 2.5625 12.3906 2.96875 12.3906 3.46875ZM14.9219 4.375C14.8594 3.1875 14.5938 2.125 13.7031 1.23438C12.8125 0.34375 11.75 0.078125 10.5625 0.015625C9.34375 -0.046875 5.65625 -0.046875 4.4375 0.015625C3.25 0.078125 2.1875 0.34375 1.29688 1.23438C0.40625 2.125 0.140625 3.1875 0.078125 4.375C0.015625 5.59375 0.015625 9.40625 0.078125 10.625C0.140625 11.8125 0.40625 12.875 1.29688 13.7656C2.1875 14.6562 3.25 14.9219 4.4375 14.9844C5.65625 15.0469 9.34375 15.0469 10.5625 14.9844C11.75 14.9219 12.8125 14.6562 13.7031 13.7656C14.5938 12.875 14.8594 11.8125 14.9219 10.625C14.9844 9.40625 14.9844 5.59375 14.9219 4.375ZM13.3438 11.9375C13.0938 12.6562 12.5312 13.2188 11.8125 13.4688C10.8438 13.7656 8.53125 13.6719 7.5 13.6719C6.46875 13.6719 4.15625 13.7656 3.1875 13.4688C2.46875 13.2188 1.90625 12.6562 1.65625 11.9375C1.35938 10.9688 1.45312 8.65625 1.45312 7.625C1.45312 6.59375 1.35938 4.28125 1.65625 3.3125C1.90625 2.59375 2.46875 2.03125 3.1875 1.78125C4.15625 1.48438 6.46875 1.57812 7.5 1.57812C8.53125 1.57812 10.8438 1.48438 11.8125 1.78125C12.5312 2.03125 13.0938 2.59375 13.3438 3.3125C13.6406 4.28125 13.5469 6.59375 13.5469 7.625C13.5469 8.65625 13.6406 10.9688 13.3438 11.9375Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
