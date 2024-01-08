import React from "react";

const SideMenu = ({showSideMenu,setSidemenustate}:any) => {
  return (
    <>
      <div className={`sidemenu sidemenu-custom slide-from-left custom-width ${showSideMenu}`}>
        <div className="container">
          <div className="sidemenu-header">
            <span className="close-button"  onClick={() => setSidemenustate('')}>Close</span>
          </div>
          <div className="sidemenu-content">
            <div
              data-elementor-type="wp-post"
              data-elementor-id="279"
              className="elementor elementor-279"
            >
              <div className="elementor-inner">
                <div className="elementor-section-wrap">
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-6b2e7290 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="6b2e7290"
                    data-element_type="section"
                    data-settings='{"background_background":"classNameic"}'
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1c6542a"
                          data-id="1c6542a"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-f489b0d elementor-widget elementor-widget-cs_menu"
                                data-id="f489b0d"
                                data-element_type="widget"
                                data-widget_type="cs_menu.default"
                              >
                                <div className="elementor-widget-container">
                                  <nav className="cs-menu cs-menu-mobile">
                                    <ul
                                      id="menu-f489b0d"
                                      className="menu mobile-menu"
                                    >
                                      <li
                                        id="menu-item-1063"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9 current_page_item menu-item-1063"
                                      >
                                        <a
                                          href="/"
                                          aria-current="page"
                                        >
                                          <span>Home</span>
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1081"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1081"
                                      >
                                        <a href="#">
                                          <span>About Us</span>
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1064"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1064"
                                      >
                                        <a href="#">
                                          <span>Services</span>
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1070"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1070"
                                      >
                                        <a href="#">
                                          <span>Contact Us</span>
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1065"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1065"
                                      >
                                        <a href="#">
                                          <span>Blog</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-618b9c6a elementor-widget elementor-widget-cs_title"
                                data-id="618b9c6a"
                                data-element_type="widget"
                                data-widget_type="cs_title.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="cs-title-wrap">
                                    <h6 className="cs-title">Contact Info</h6>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-28c9116 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="28c9116"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                              >
                                <div className="elementor-widget-container">
                                  <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                      <a href="#" target="_blank">
                                        <span className="elementor-icon-list-icon">
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-map-marker-alt"
                                          ></i>
                                        </span>
                                        <span className="elementor-icon-list-text">
                                          130 LEE AVE SUITE 638 BROOKLYN, NY
                                          11211
                                        </span>
                                      </a>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <a href="tel:+13473654373">
                                        <span className="elementor-icon-list-icon">
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-phone-alt"
                                          ></i>{" "}
                                        </span>
                                        <span className="elementor-icon-list-text">
                                          +1 347 844 0132 <br />
                                          Office : +1 347 365 4373
                                        </span>
                                      </a>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <a href="mailto:joel@friedkon.com">
                                        <span className="elementor-icon-list-icon">
                                          <i
                                            aria-hidden="true"
                                            className="far fa-envelope"
                                          ></i>{" "}
                                        </span>
                                        <span className="elementor-icon-list-text">
                                          joel@friedkon.com
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4bf4fbc0 elementor-widget elementor-widget-cs_social"
                                data-id="4bf4fbc0"
                                data-element_type="widget"
                                data-widget_type="cs_social.default"
                              >
                                <div className="elementor-widget-container">
                                  <nav
                                    id="4bf4fbc0-social-menu-container"
                                    className="social-navigation"
                                  >
                                    <ul
                                      id="4bf4fbc0-social-menu"
                                      className="social-nav menu"
                                    >
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43">
                                        <a href="https://www.facebook.com/">
                                          Facebook
                                        </a>
                                      </li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44">
                                        <a href="https://www.twitter.com/">
                                          Twitter
                                        </a>
                                      </li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-45">
                                        <a href="https://www.pinterest.com/">
                                          Pinterest
                                        </a>
                                      </li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46">
                                        <a href="https://www.youtube.com/">
                                          YouTube
                                        </a>
                                      </li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47">
                                        <a href="https://www.instagram.com/">
                                          Instagram
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4a8c7748 elementor-widget elementor-widget-text-editor"
                                data-id="4a8c7748"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p>© Copyright FriedKon.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-screen">
        <div className="container">
          <span className="close-button" onClick={() => setSidemenustate('')}>Close</span>
          <div className="search-wrapper">
            <div className="search">
              <form
                className="search-form"
                role="search"
                method="get"
                action=""
              >
                <label>
                  <span className="screen-reader-text">Search for:</span>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Enter a keyword to search"
                    name="s"
                  />
                </label>
                <button type="submit" className="search-submit">
                  <span className="screen-reader-text">Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
