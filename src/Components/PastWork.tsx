
import EditButton from './EditButton'

const PastWork = ({pastWork=[]}:any) => {
    const fileUrl = process.env.REACT_APP_FILE_BASEURL;
    const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
    className="elementor-section elementor-top-section elementor-element elementor-element-9541954 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    data-id="9541954"
    data-element_type="section"
  >
    <div className="elementor-container elementor-column-gap-no">
      <div className="elementor-row">
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-bec869d"
          data-id="bec869d"
          data-element_type="column"
        >
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-c247c3d cs-animation-medium-offset elementor-widget elementor-widget-image animated fadeInUp"
                data-id="c247c3d"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':200}"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-image">
                    <img
                      decoding="async"
                      width="600"
                      height="900"
                      src={
                        fileUrl + pastWork[0]?.image || ""
                      }
                      className="attachment-cozystay_600x9999 size-cozystay_600x9999 wp-image-53"
                      alt=""
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-60f2283 elementor-mobile-align-center elementor-widget elementor-widget-cs_list animated fadeInUp"
                data-id="60f2283"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':200}"
                data-widget_type="cs_list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="cs-list cs-list-type-unordered">
                    <li>
                      <span className="list-icon color-primary">
                        <i
                          aria-hidden="true"
                          className="fas fa-circle"
                        ></i>
                      </span>
                      <span className="list-content">
                        {pastWork[0]?.title}
                      </span>
                    </li>
                  </ul>
                  <EditButton admin={admin} paramId={pastWork[0]?._id} configId={6} />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-3348432 cs-animation-medium-offset elementor-widget elementor-widget-image animated fadeInUp"
                data-id="3348432"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':200}"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-image">
                    <img
                      decoding="async"
                      width="550"
                      height="826"
                      src={
                        fileUrl + pastWork[1]?.image || ""
                      }
                      className="attachment-cozystay_550x9999 size-cozystay_550x9999 wp-image-54"
                      alt=""
                      sizes="(max-width: 550px) 100vw, 550px"
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-bfe63dd elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-cs_list animated fadeInUp"
                data-id="bfe63dd"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':200}"
                data-widget_type="cs_list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="cs-list cs-list-type-unordered">
                    <li>
                      <span className="list-icon color-primary">
                        <i
                          aria-hidden="true"
                          className="fas fa-circle"
                        ></i>
                      </span>
                      <span className="list-content">
                        {pastWork[1]?.title}
                      </span>
                    </li>
                  </ul>
                  <EditButton admin={admin} paramId={pastWork[1]?._id} configId={6}  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2835994"
          data-id="2835994"
          data-element_type="column"
        >
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-98bb1e1 elementor-widget__width-initial elementor-widget elementor-widget-spacer"
                data-id="98bb1e1"
                data-element_type="widget"
                data-widget_type="spacer.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner"></div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-4dd521f elementor-widget elementor-widget-cs_title"
                data-id="4dd521f"
                data-element_type="widget"
                data-widget_type="cs_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="cs-title-wrap text-center">
                    <h6 className="cs-title">
                      Wonderful work done in past with
                      Excellence!!
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-bdbd6ed elementor-widget__width-initial elementor-widget elementor-widget-spacer"
                data-id="bdbd6ed"
                data-element_type="widget"
                data-widget_type="spacer.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-272e13a"
          data-id="272e13a"
          data-element_type="column"
        >
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-d748e29 cs-animation-medium-offset elementor-widget elementor-widget-image animated fadeInUp"
                data-id="d748e29"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':400}"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-image">
                    <img
                      decoding="async"
                      width="600"
                      height="901"
                      src={
                        fileUrl + pastWork[2]?.image || ""
                      }
                      // "/images/img-52-600x901.jpg"
                      className="attachment-cozystay_600x9999 size-cozystay_600x9999 wp-image-55"
                      alt=""
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-28b16fb elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-cs_list animated fadeInUp"
                data-id="28b16fb"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':200}"
                data-widget_type="cs_list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="cs-list cs-list-type-unordered">
                    <li>
                      <span className="list-icon color-primary">
                        <i
                          aria-hidden="true"
                          className="fas fa-circle"
                        ></i>
                      </span>
                      <span className="list-content">
                        {/* Team work to make it happen */}
                        {pastWork[2]?.title || ""}
                      </span>
                    </li>
                  </ul>
                  <EditButton admin={admin} paramId={pastWork[2]?._id} configId={6}  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-e0485c3 cs-animation-medium-offset elementor-widget elementor-widget-image animated fadeInUp"
                data-id="e0485c3"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':400}"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-image">
                    <img
                      decoding="async"
                      width="600"
                      height="400"
                      src={
                        fileUrl + pastWork[3]?.image || ""
                      }
                      // src="/images/img-54-600x400.jpg"
                      className="attachment-cozystay_600x9999 size-cozystay_600x9999 wp-image-56"
                      alt=""
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-904fe6b elementor-mobile-align-center elementor-widget elementor-widget-cs_list animated fadeInUp"
                data-id="904fe6b"
                data-element_type="widget"
                data-settings="{'_animation':'fadeInUp','_animation_delay':200}"
                data-widget_type="cs_list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="cs-list cs-list-type-unordered">
                    <li>
                      <span className="list-icon color-primary">
                        <i
                          aria-hidden="true"
                          className="fas fa-circle"
                        ></i>
                      </span>
                      <span className="list-content">
                        {/* Carry out any level of difficulties in work */}
                        {pastWork[3]?.title}
                      </span>
                    </li>
                  </ul>
                  <EditButton admin={admin} paramId={pastWork[3]?._id} configId={6}  />
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

export default PastWork