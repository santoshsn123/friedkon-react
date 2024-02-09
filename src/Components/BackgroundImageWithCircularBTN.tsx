import EditButton from "./EditButton";

const BackgroundImageWithCircularBTN = ({ aboutUsBGImage = {} }: any) => {
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-bf15ee2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="bf15ee2"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3c1fa23f"
              data-id="3c1fa23f"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-5dac1486 elementor-align-center elementor-widget elementor-widget-cs_circle_button"
                    data-id="5dac1486"
                    data-element_type="widget"
                    data-widget_type="cs_circle_button.default"
                  >
                    <div className="elementor-widget-container">
                      <a
                        href="#"
                        className="elementor-button-link button cs-btn-circle cs-btn-color-secondary with-inner-border"
                        role="button"
                      >
                        <span className="cs-btn-text">About Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-67e0ef64 elementor-section-height-min-height cs-parallax-on-scroll cs_scroll_y_100 elementor-section-full_width elementor-section-height-default elementor-section-items-middle"
        data-id="67e0ef64"
        data-element_type="section"
        data-settings="{'background_background':'classNameic'}"
        data-cs-parallax-y="100"
        data-cs-background-image={fileUrl + aboutUsBGImage.image}
        style={{ backgroundImage: `url(${fileUrl + aboutUsBGImage.image})` }}
      >
        <EditButton admin={admin} paramId={aboutUsBGImage._id} configId={13} />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3bedb5a2"
              data-id="3bedb5a2"
              data-element_type="column"
            >
              <div className="elementor-column-wrap">
                <div className="elementor-widget-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackgroundImageWithCircularBTN;
