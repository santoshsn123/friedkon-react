import parse from "html-react-parser";
import EditButton from "./EditButton";

const WelcomeTextComponent = ({ welcometext = {} }: any) => {
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-799a1d60 cs-section-content-fullwidth elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="799a1d60"
      data-element_type="section"
      data-settings="{'background_background':'classNameic'}"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7b805e9a dark-color"
            data-id="7b805e9a"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-2d62d31e elementor-widget elementor-widget-cs_title"
                  data-id="2d62d31e"
                  data-element_type="widget"
                  data-widget_type="cs_title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="cs-title-wrap text-center">
                      <div className="cs-subtitle-wrap">
                        <span className="cs-subtitle color-white">
                          {/* Welcome to FriedKon */}
                          {welcometext.subtitle}
                        </span>
                      </div>
                      <h3 className="cs-title">
                        {/* Select Best Agency for your work */}
                        {welcometext.title}
                      </h3>
                      <div className="cs-title-text">
                        {/* <p>
                        Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Obcaecati nemo cupiditate similique
                        temporibus iure nisi doloremque
                        nobis praesentium? Laboriosam,
                        accusantium est aut dolores nostrum
                        molestiae magni saepe quisquam
                        laborum cumque.
                      </p> */}
                        {parse(welcometext.description || "")}
                      </div>
                      <EditButton
                        admin={admin}
                        paramId={welcometext._id}
                        configId={11}
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

export default WelcomeTextComponent;
