import parse from "html-react-parser";
import React from "react";
import EditButton from "./EditButton";

const Footer = ({
  admin,
  websiteData: {
    reachOut = {},
    socialMedia = {},
    footerAboutUsText = {},
    footerBackground = {},
  },
}: any) => {
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  return (
    <footer id="colophon" className="site-footer">
      <div className="site-footer-main">
        <div className="container">
          {/* <link
            rel="stylesheet"
            id="elementor-post-178-css"
            href="./assets/css/post-178.css"
            type="text/css"
            media="all"
          /> */}
          <div
            data-elementor-type="wp-post"
            data-elementor-id="178"
            className="elementor elementor-178"
          >
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-388232cf elementor-section-full_width cs-section-content-fullwidth cs_scroll_y_80 cs-parallax-on-scroll elementor-section-height-default elementor-section-height-default"
                  data-id="388232cf"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                  data-cs-parallax-y="80"
                  data-cs-background-image={fileUrl + footerBackground.image}
                  style={{
                    backgroundImage: `url(${fileUrl + footerBackground.image})`,
                  }}
                >
                  {/* <div className="parallax-img-container">
                    <img src={fileUrl + footerBackground.image} />
                  </div> */}
                  <div className="elementor-background-overlay">
                    <EditButton
                      admin={admin}
                      paramId={footerBackground._id}
                      configId={16}
                    />
                  </div>

                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4b6d3e71 dark-color"
                        data-id="4b6d3e71"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-5b3c92a3 elementor-widget elementor-widget-cs_title"
                              data-id="5b3c92a3"
                              data-element_type="widget"
                              data-widget_type="cs_title.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="cs-title-wrap">
                                  <h4 className="cs-title">
                                    Sign up for our newsletter
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-233e45f elementor-widget elementor-widget-cs_signup"
                              data-id="233e45f"
                              data-element_type="widget"
                              data-widget_type="cs_signup.default"
                            >
                              <div className="elementor-widget-container">
                                <form
                                  id="mc4wp-form-1"
                                  className="mc4wp-form cs-signup signup-style-1 cs-form-underline mc4wp-form-7"
                                  method="post"
                                  data-id="7"
                                  data-name="Newsletter"
                                >
                                  <div className="mc4wp-form-fields">
                                    <div className="fields-container">
                                      <input
                                        type="email"
                                        name="EMAIL"
                                        placeholder="Your Email Address"
                                        required
                                      />
                                      <button type="submit">
                                        <span className="btn-text">
                                          Subscribe
                                        </span>
                                      </button>
                                    </div>
                                    <p>
                                      <label className="agree-to-terms text-small">
                                        <input
                                          name="AGREE_TO_TERMS"
                                          type="checkbox"
                                        />
                                        I agree to the{" "}
                                        <a
                                          href="#"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          Privacy Policy
                                        </a>
                                      </label>
                                    </p>
                                  </div>
                                  <input
                                    type="hidden"
                                    name="_mc4wp_timestamp"
                                  />
                                  <input type="hidden" name="_mc4wp_form_id" />
                                  <input
                                    type="hidden"
                                    name="_mc4wp_form_element_id"
                                  />
                                </form>
                              </div>
                            </div>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-18feb1f3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="18feb1f3"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-no">
                                <div className="elementor-row">
                                  <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4f304d45"
                                    data-id="4f304d45"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="elementor-element elementor-element-72742df3 elementor-widget elementor-widget-cs_title"
                                          data-id="72742df3"
                                          data-element_type="widget"
                                          data-widget_type="cs_title.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="cs-title-wrap">
                                              <h6 className="cs-title">
                                                <img
                                                  width="255"
                                                  height="51"
                                                  src="/images/logo-3-255x51.png"
                                                  className="attachment-cozystay_255x9999 size-cozystay_255x9999 wp-image-184"
                                                  alt=""
                                                  sizes="(max-width: 255px) 100vw, 255px"
                                                />
                                              </h6>
                                              <div className="cs-title-text">
                                                <EditButton
                                                  admin={admin}
                                                  paramId={
                                                    footerAboutUsText._id
                                                  }
                                                  configId={15}
                                                />
                                                <p>
                                                  {parse(
                                                    footerAboutUsText.footeraboutustext ||
                                                      ""
                                                  )}
                                                  {/* Founded in 1998, CozyStay
                                                  Lodge is a luxury boutique
                                                  hotel in the heart of Napa
                                                  Valley, immersing you in an
                                                  idyllic setting against the
                                                  pure sky. Stay, sip, and savor
                                                  the best of Napa wine country
                                                  at CozyStay. */}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-23be821f elementor-widget elementor-widget-cs_social"
                                          data-id="23be821f"
                                          data-element_type="widget"
                                          data-widget_type="cs_social.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <nav
                                              id="23be821f-social-menu-container"
                                              className="social-navigation"
                                            >
                                              <EditButton
                                                admin={admin}
                                                paramId={socialMedia._id}
                                                configId={14}
                                              />
                                              {/* {JSON.stringify(socialMedia)} */}
                                              <ul
                                                id="23be821f-social-menu"
                                                className="social-nav menu"
                                              >
                                                {socialMedia.facebook && (
                                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43">
                                                    <a
                                                      href={
                                                        socialMedia.facebook
                                                      }
                                                      target="_blank"
                                                    >
                                                      Facebook
                                                    </a>
                                                  </li>
                                                )}
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44">
                                                  <a
                                                    href={socialMedia.twitter}
                                                    target="_blank"
                                                  >
                                                    Twitter
                                                  </a>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-45">
                                                  <a
                                                    href={socialMedia.pintrest}
                                                    target="_blank"
                                                  >
                                                    Pinterest
                                                  </a>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46">
                                                  <a
                                                    href={socialMedia.youtube}
                                                    target="_blank"
                                                  >
                                                    YouTube
                                                  </a>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47">
                                                  <a
                                                    href={socialMedia.instagram}
                                                    target="_blank"
                                                  >
                                                    Instagram
                                                  </a>
                                                </li>
                                              </ul>
                                            </nav>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-33114845"
                                    data-id="33114845"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="elementor-element elementor-element-24a4b3ba elementor-widget elementor-widget-cs_title"
                                          data-id="24a4b3ba"
                                          data-element_type="widget"
                                          data-widget_type="cs_title.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="cs-title-wrap">
                                              <h6 className="cs-title">
                                                Reach Out
                                              </h6>
                                              <EditButton
                                                admin={admin}
                                                paramId={reachOut._id}
                                                configId={12}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-f8c95d4 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                          data-id="f8c95d4"
                                          data-element_type="widget"
                                          data-widget_type="icon-list.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <ul className="elementor-icon-list-items">
                                              <li className="elementor-icon-list-item">
                                                <a href="mailto:joel@friedkon.com">
                                                  <span className="elementor-icon-list-text">
                                                    Email: {reachOut.email}
                                                    {/* joel@friedkon.com */}
                                                  </span>
                                                </a>
                                              </li>
                                              <li className="elementor-icon-list-item">
                                                <a href="tel:{reachOut.telephone}">
                                                  <span className="elementor-icon-list-text">
                                                    Telephone:
                                                    {reachOut.telephone}
                                                    {/* +41 22 345 66 89 */}
                                                  </span>
                                                </a>
                                              </li>
                                              <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-text">
                                                  {reachOut.address}
                                                  {/* Address: 130 LEE AVE SUITE 638
                                                  BROOKLYN, NY 11211 */}
                                                </span>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-1c6e1448 elementor-widget elementor-widget-cs_button"
                                          data-id="1c6e1448"
                                          data-element_type="widget"
                                          data-widget_type="cs_button.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <a
                                              href={reachOut.locationlink}
                                              target="_blank"
                                              className="elementor-button-link button cs-btn-underline cs-btn-small"
                                              role="button"
                                            >
                                              <span className="cs-btn-text">
                                                Get Directions
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2ff6e5ee"
                                    data-id="2ff6e5ee"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="elementor-element elementor-element-48266c66 elementor-widget elementor-widget-cs_title"
                                          data-id="48266c66"
                                          data-element_type="widget"
                                          data-widget_type="cs_title.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="cs-title-wrap">
                                              <h6 className="cs-title">
                                                Navigate
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-d6d6080 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                          data-id="d6d6080"
                                          data-element_type="widget"
                                          data-widget_type="icon-list.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <ul className="elementor-icon-list-items">
                                              <li className="elementor-icon-list-item">
                                                <a href="/">
                                                  <span className="elementor-icon-list-text">
                                                    Home
                                                  </span>
                                                </a>
                                              </li>
                                              <li className="elementor-icon-list-item">
                                                <a href="#">
                                                  <span className="elementor-icon-list-text">
                                                    About Us
                                                  </span>
                                                </a>
                                              </li>
                                              <li className="elementor-icon-list-item">
                                                <a href="#">
                                                  <span className="elementor-icon-list-text">
                                                    Contact Us
                                                  </span>
                                                </a>
                                              </li>
                                              <li className="elementor-icon-list-item">
                                                <a href="#">
                                                  <span className="elementor-icon-list-text">
                                                    Services
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
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
                </section>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-65107bc4 elementor-section-content-middle cs-section-content-fullwidth elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="65107bc4"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1a4634af dark-color"
                        data-id="1a4634af"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-1c19ae3 elementor-widget elementor-widget-text-editor"
                              data-id="1c19ae3"
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
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-51382688 dark-color"
                        data-id="51382688"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-171f4039 elementor-widget elementor-widget-cs_menu"
                              data-id="171f4039"
                              data-element_type="widget"
                              data-widget_type="cs_menu.default"
                            >
                              <div className="elementor-widget-container">
                                <nav className="cs-menu footer-menu not-mobile-menu text-right text-center-tablet">
                                  <ul id="menu-171f4039" className="menu">
                                    <li
                                      id="menu-item-48"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48"
                                    >
                                      <a href="#">
                                        <span>Privacy</span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-49"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-49"
                                    >
                                      <a href="#">
                                        <span>Terms of Use</span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-50"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-50"
                                    >
                                      <a href="#">
                                        <span>Policy</span>
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
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
    </footer>
  );
};

export default Footer;
