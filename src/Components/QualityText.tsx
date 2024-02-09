import parse from "html-react-parser";
import EditButton from "./EditButton";

const QualityText = ({qualityText={},configId,reverse=false}:any) => {
    const fileUrl = process.env.REACT_APP_FILE_BASEURL;
    const admin = localStorage.getItem("loggedInUser") || "";

    const showTextOrImage = (type:any) => {
        if((type=='image' && !reverse) || (type=='text' && reverse) ){
           return (
            <img
            decoding="async"
            width="1024"
            height="801"
            src={fileUrl + qualityText.image}
            className="attachment-large size-large wp-image-58"
            alt=""
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        ) 
        }
        if((type=='text' && !reverse) || (type=='image' && reverse)){
            return (
               <>
                <div className="cs-subtitle-wrap">
                <span className="cs-subtitle">
                  {qualityText.subtitle}
                </span>
              </div>
              <h3 className="cs-title">
                {qualityText.title}
              </h3>
              <div className="cs-title-text">
                <p>
                  {parse(
                    qualityText.description || ""
                  )}
                </p>
              </div>
              </>
            )
        }
        
      }
      
  return (
    <section
    className="elementor-section elementor-top-section elementor-element elementor-element-41a3623d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    data-id="41a3623d"
    data-element_type="section"
    data-settings="{'background_background':'classNameic'}"
  >
    <div className="elementor-container elementor-column-gap-no">
      <div className="elementor-row">
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7b2153b6"
          data-id="7b2153b6"
          data-element_type="column"
        >
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-1911463f cs-animation-small-offset elementor-widget elementor-widget-image animated fadeInLeft"
                data-id="1911463f"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInLeft'}"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-image">
                  {showTextOrImage('image')}
                     {/* <img
                      decoding="async"
                      width="1024"
                      height="801"
                      src={fileUrl + qualityText.image}
                      className="attachment-large size-large wp-image-58"
                      alt=""
                      sizes="(max-width: 1024px) 100vw, 1024px"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4e125f75"
          data-id="4e125f75"
          data-element_type="column"
        >
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-992376d cs-animation-small-offset elementor-widget elementor-widget-cs_title animated fadeInRight"
                data-id="992376d"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInRight'}"
                data-widget_type="cs_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="cs-title-wrap">
                 {showTextOrImage('text')}
                    <EditButton admin={admin} paramId={qualityText?._id} configId={configId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default QualityText;



