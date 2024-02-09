import parse from "html-react-parser";
import EditButton from "./EditButton";

const FeaturesComponent = ({ featureHeading = {}, features = [] }: any) => {
    console.log('featureHeading :- ',featureHeading,features);
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-7d1e1cca cs-section-content-fullwidth elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="7d1e1cca"
      data-element_type="section"
      data-settings="{'background_background':'classNameic'}"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-776ae962 cs-animation-small-offset animated fadeInLeft"
            data-id="776ae962"
            data-element_type="column"
            data-settings="{'animation':'fadeInLeft'}"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-561d44c7 elementor-widget elementor-widget-cs_title"
                  data-id="561d44c7"
                  data-element_type="widget"
                  data-widget_type="cs_title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="cs-title-wrap">
                      <div className="cs-subtitle-wrap">
                        <span className="cs-subtitle">
                          {/* Discover the Services we offered */}
                          {featureHeading.subtitle}
                        </span>
                      </div>
                      <h3 className="cs-title">
                        {/* Lorem ipsum, dolor sit amet */}

                        {featureHeading.title}
                      </h3>
                      <EditButton
                        admin={admin}
                        paramId={featureHeading._id}
                        configId={7}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-65e68fb4 elementor-widget elementor-widget-cs_info_box"
                  data-id="65e68fb4"
                  data-element_type="widget"
                  data-widget_type="cs_info_box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="cs-info-box column-2 valign-top img-left">
                      <div className="cs-info-box-wrap">
                        {features.reverse().map((feat: any) => (
                          <div
                            key={feat._id}
                            className="cs-info-box-item elementor-repeater-item-cccff81"
                          >
                            <div className="cs-item-container">
                              {/* <div
                                                                            className="cs-info-box-img">
                                                                            <i aria-hidden="true"
                                                                                className="flaticon flaticon-car"></i>
                                                                        </div> */}
                              <div className="cs-info-box-img">
                                <img src={fileUrl + feat.image} />
                              </div>
                              <div className="cs-info-box-content">
                                <h5 className="cs-title cs-info-box-title">
                                  {/* Site fully Covered */}
                                  {feat.title}
                                </h5>
                                <div className="cs-info-box-text">
                                  {/* <p>Lorem ipsum proin
                                                                                    gravida velit
                                                                                    auctor sde re
                                                                                    sit amet space.
                                                                                </p> */}
                                  {parse(feat.description || "")}
                                </div>
                              </div>
                            </div>
                            <EditButton
                              admin={admin}
                              paramId={feat._id}
                              configId={8}
                            />
                          </div>
                        ))}

                        {/* <div
                                                                    className="cs-info-box-item elementor-repeater-item-6c33aa7">
                                                                    <div className="cs-item-container">
                                                                        <div
                                                                            className="cs-info-box-img">
                                                                            <i aria-hidden="true"
                                                                                className="flaticon flaticon-customer-service"></i>
                                                                        </div>
                                                                        <div
                                                                            className="cs-info-box-content">
                                                                            <h5
                                                                                className="cs-title cs-info-box-title">
                                                                                Latest Instruments
                                                                            </h5>
                                                                            <div
                                                                                className="cs-info-box-text">
                                                                                <p>Lorem ipsum proin
                                                                                    gravida velit
                                                                                    auctor sde re
                                                                                    sit amet space.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="cs-info-box-item elementor-repeater-item-0a01fb1">
                                                                    <div className="cs-item-container">
                                                                        <div
                                                                            className="cs-info-box-img">
                                                                            <i aria-hidden="true"
                                                                                className="flaticon flaticon-wifi-2"></i>
                                                                        </div>
                                                                        <div
                                                                            className="cs-info-box-content">
                                                                            <h5
                                                                                className="cs-title cs-info-box-title">
                                                                                Quality work
                                                                            </h5>
                                                                            <div
                                                                                className="cs-info-box-text">
                                                                                <p>Lorem ipsum proin
                                                                                    gravida velit
                                                                                    auctor sde re
                                                                                    sit amet space.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="cs-info-box-item elementor-repeater-item-bb40a8b">
                                                                    <div className="cs-item-container">
                                                                        <div
                                                                            className="cs-info-box-img">
                                                                            <i aria-hidden="true"
                                                                                className="flaticon flaticon-laundry-service"></i>
                                                                        </div>
                                                                        <div
                                                                            className="cs-info-box-content">
                                                                            <h5
                                                                                className="cs-title cs-info-box-title">
                                                                                Delivers in estimated time
                                                                            </h5>
                                                                            <div
                                                                                className="cs-info-box-text">
                                                                                <p>Lorem ipsum proin
                                                                                    gravida velit
                                                                                    auctor sde re
                                                                                    sit amet space.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="cs-info-box-item elementor-repeater-item-55da29c">
                                                                    <div className="cs-item-container">
                                                                        <div
                                                                            className="cs-info-box-img">
                                                                            <i aria-hidden="true"
                                                                                className="flaticon flaticon-breakfast-3"></i>
                                                                        </div>
                                                                        <div
                                                                            className="cs-info-box-content">
                                                                            <h5
                                                                                className="cs-title cs-info-box-title">
                                                                                Transperent process
                                                                            </h5>
                                                                            <div
                                                                                className="cs-info-box-text">
                                                                                <p>Lorem ipsum proin
                                                                                    gravida velit
                                                                                    auctor sde re
                                                                                    sit amet space.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="cs-info-box-item elementor-repeater-item-0bf7877">
                                                                    <div className="cs-item-container">
                                                                        <div
                                                                            className="cs-info-box-img">
                                                                            <i aria-hidden="true"
                                                                                className="flaticon flaticon-parking"></i>
                                                                        </div>
                                                                        <div
                                                                            className="cs-info-box-content">
                                                                            <h5
                                                                                className="cs-title cs-info-box-title">
                                                                                Experienced team
                                                                            </h5>
                                                                            <div
                                                                                className="cs-info-box-text">
                                                                                <p>Lorem ipsum proin
                                                                                    gravida velit
                                                                                    auctor sde re
                                                                                    sit amet space.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3ad70fae cs-animation-small-offset animated fadeInRight"
            data-id="3ad70fae"
            data-element_type="column"
            data-settings="{'animation':'fadeInRight'}"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-2adb8390 elementor-widget elementor-widget-image"
                  data-id="2adb8390"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <img
                        decoding="async"
                        width="780"
                        height="666"
                        src={fileUrl + featureHeading.image}
                        // "/images/img-62-780x666.jpg"
                        className="attachment-cozystay_780x9999 size-cozystay_780x9999 wp-image-68"
                        alt=""
                        sizes="(max-width: 780px) 100vw, 780px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
