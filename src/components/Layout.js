import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useScrollEffects from '../hooks/useScrollEffects';
import useInteractiveEffects from '../hooks/useInteractiveEffects';
import useCounterAnimation from '../hooks/useCounterAnimation';

const Layout = ({ children }) => {
  useScrollEffects();
  useInteractiveEffects();
  useCounterAnimation();

  return (
    <div>
      <div className="cs-preloader cs-center">
        <div className="cs-preloader_in"></div>
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
      <span className="cs-scrollup">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor" />
        </svg>
      </span>
      
      {/* Video Popup */}
      <div className="cs-video_popup">
        <div className="cs-video_popup_overlay"></div>
        <div className="cs-video_popup_content">
          <div className="cs-video_popup_layer"></div>
          <div className="cs-video_popup_container">
            <div className="cs-video_popup_align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="about:blank" title="Video"></iframe>
              </div>
            </div>
            <div className="cs-video_popup_close"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
