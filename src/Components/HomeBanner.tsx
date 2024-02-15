import parse from "html-react-parser";
import EditButton from "./EditButton";
import BookAppointment from "./BookAppointment";

const HomeBanner = ({banner={},configId,showForm=false}:any) => {
    const fileUrl = process.env.REACT_APP_FILE_BASEURL;
    const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-60d07609 elementor-section-height-min-height cs-section-content-fullwidth cs_scroll_y_120 cs-parallax-on-scroll elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
      data-id="60d07609"
      data-element_type="section"
      data-settings="{'background_background':'classNameic'}"
      data-cs-parallax-y="120"
      data-cs-background-image={fileUrl + banner.image}
      style={{ backgroundImage: `url(${fileUrl + banner.image})` }}
    >
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-70 elementor-top-column elementor-element elementor-element-105f5244 dark-color"
            data-id="105f5244"
            data-element_type="column"
          >
            <div style={{height:'371px'}} className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-4753721a elementor-widget elementor-widget-cs_title"
                  data-id="4753721a"
                  data-element_type="widget"
                  data-widget_type="cs_title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="cs-title-wrap">
                      <div className="cs-subtitle-wrap">
                        <span className="cs-subtitle color-white">
                          {banner.subHeading}
                        </span>
                      </div>
                      <h1 className="cs-title">{banner.heading}</h1>
                      <div className="cs-title-text">
                        {parse(banner.description || "")}
                      </div>
                      <EditButton
                        admin={admin}
                        configId={configId}
                        paramId={banner._id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showForm &&   <div
            className="elementor-column elementor-col-30 elementor-top-column elementor-element elementor-element-79386528 dark-color elementor-hidden-tablet elementor-hidden-mobile"
            data-id="79386528"
            data-element_type="column"
            data-settings="{'background_background':'classNameic'}"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-background-overlay"></div>
              <div className="elementor-widget-wrap">
               <BookAppointment />
              </div>
            </div>
          </div>}
        
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
