import parse from "html-react-parser";
import EditButton from "./EditButton";

const BelowBanner = ({belowBannerText={}}:any) => {
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-5594a8db cs-section-content-fullwidth elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="5594a8db"
      data-element_type="section"
      data-settings="{'background_background':'classNameic'}"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-311cf3e1"
            data-id="311cf3e1"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-523c3ab0 cs-animation-small-offset elementor-widget elementor-widget-cs_title animated fadeInUp"
                  data-id="523c3ab0"
                  data-element_type="widget"
                  data-settings="{'_animation':'fadeInUp','_animation_delay':100}"
                  data-widget_type="cs_title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="cs-title-wrap text-center">
                      <div className="cs-subtitle-wrap">
                        <span className="cs-subtitle">
                          {belowBannerText.subtitle}
                        </span>
                      </div>
                      <h3 className="cs-title">{belowBannerText.title}</h3>
                      <div className="cs-title-text">
                        {parse(belowBannerText.description || "")}
                      </div>
                      <EditButton
                        admin={admin}
                        paramId={belowBannerText._id}
                        configId={4}
                      />

                      <div className="cs-title-btn">
                        <a
                          className="button elementor-button-link cs-btn-color-secondary"
                          role="button"
                          href="#"
                        >
                          <span className="cs-btn-text">Explore Process</span>
                        </a>
                      </div>
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

export default BelowBanner;
