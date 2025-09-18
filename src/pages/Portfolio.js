import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <div className="cs-page_heading cs-bg cs-center" data-src="/assets/img/portfolio_hero_bg.jpeg">
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">Portfolio</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
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
          </div>
          <div className="cs-height_70 cs-height_lg_50"></div>
          <div className="cs-isotop cs-style1 cs-isotop_col_3 cs-has_gutter_24">
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
            <div className="cs-isotop_item ui_ux_design logo_design">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_1.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Colorful Art Work</h2>
                  <div className="cs-portfolio_subtitle">See Details</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item web_design mobile_apps">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_2.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Colorful Art Work</h2>
                  <div className="cs-portfolio_subtitle">See Details</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item ui_ux_design logo_design">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_3.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Colorful Art Work</h2>
                  <div className="cs-portfolio_subtitle">See Details</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item web_design mobile_apps">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_4.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Colorful Art Work</h2>
                  <div className="cs-portfolio_subtitle">See Details</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item logo_design ui_ux_design">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_5.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Colorful Art Work</h2>
                  <div className="cs-portfolio_subtitle">See Details</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
            <div className="cs-isotop_item web_design mobile_apps">
              <div className="cs-portfolio cs-style1 cs-type1">
                <div className="cs-portfolio_hover"></div>
                <div className="cs-portfolio_bg cs-bg" data-src="/assets/img/portfolio_6.jpeg"></div>
                <div className="cs-portfolio_info">
                  <div className="cs-portfolio_info_bg cs-accent_bg"></div>
                  <h2 className="cs-portfolio_title">Colorful Art Work</h2>
                  <div className="cs-portfolio_subtitle">See Details</div>
                </div>
                <div className="cs-portfolio_shape"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>
    </div>
  );
};

export default Portfolio;
