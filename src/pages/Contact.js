import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic here
  };

  return (
    <div>
      <SEO 
        title="Contact Us - PixelHub Digital Agency | Get a Quote Today"
        description="Get in touch with PixelHub for your next digital project. Contact our expert team for web design, development, and digital marketing services."
        keywords="contact pixelhub, get quote, web design consultation, digital agency contact, project inquiry"
        url="https://pixelhub.com/contact"
      />
      <div 
        className="cs-page_heading cs-bg cs-center" 
        data-src="/assets/img/contact_hero_bg.jpeg"
        style={{backgroundImage: 'url(/assets/img/contact_hero_bg.jpeg)'}}
      >
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">Contact Us</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="cs-height_150 cs-height_lg_80"></div>
      
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">Getting Touch</h3>
                <h2 className="cs-section_title">Do you have a project in your mind? Keep connect us.</h2>
              </div>
              <div className="cs-height_55 cs-height_lg_30"></div>
              <ul className="cs-contact_info cs-style1 cs-mp0">
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.08 11.82 12.69 11.9 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.58C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM9 0V10L12 7H18V0H9Z" fill="#fd550e" />
                  </svg>
                  <span>+44 454 7800 112</span>
                </li>
                <li>
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6.98V16C20 17.1 19.1 18 18 18H2C0.9 18 0 17.1 0 16V4C0 2.9 0.9 2 2 2H12.1C12.04 2.32 12 2.66 12 3C12 4.48 12.65 5.79 13.67 6.71L10 9L2 4V6L10 11L15.3 7.68C15.84 7.88 16.4 8 17 8C18.13 8 19.16 7.61 20 6.98ZM14 3C14 4.66 15.34 6 17 6C18.66 6 20 4.66 20 3C20 1.34 18.66 0 17 0C15.34 0 14 1.34 14 3Z" fill="#fd550e" />
                  </svg>
                  <span>infotech@arino.com</span>
                </li>
                <li>
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#fd550e" />
                  </svg>
                  <span>50 Wall Street Suite, 44150 <br />Ohio, United States</span>
                </li>
              </ul>
              <div className="cs-height_40 cs-height_lg_30"></div>
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
              </div>
            </div>
            <div className="col-lg-6">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input 
                    type="text" 
                    className="cs-form_field" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input 
                    type="email" 
                    className="cs-form_field" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-sm-12">
                  <label className="cs-primary_color">Project Type*</label>
                  <input 
                    type="text" 
                    className="cs-form_field" 
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  />
                  <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-sm-12">
                  <label className="cs-primary_color">Message*</label>
                  <textarea 
                    cols="30" 
                    rows="7" 
                    className="cs-form_field" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="cs-height_25 cs-height_lg_25"></div>
                </div>
                <div className="col-sm-12">
                  <button className="cs-btn cs-style1" type="submit">
                    <span>Send Message</span>
                    <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_150 cs-height_lg_80"></div>
      
      <div className="cs-google_map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjUiTiA3NMKwMDInMTAuNyJX!5e0!3m2!1sen!2sbd!4v1626781101144!5m2!1sen!2sbd" 
          allowFullScreen="" 
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
