import parse from "html-react-parser";
import React from 'react'
import EditButton from './EditButton'

const PlanComponent = ({plans=[]}:any) => {
    const fileUrl = process.env.REACT_APP_FILE_BASEURL;
    const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
    className="elementor-section elementor-top-section elementor-element elementor-element-5bc85ebf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    data-id="5bc85ebf"
    data-element_type="section"
  >
    <div className="elementor-container elementor-column-gap-no">
      <div className="elementor-row">
        {plans.map((plan: any) => (
          <div
            key={plan._id}
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5811d0f1"
            data-id="5811d0f1"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-764982 cs-animation-medium-offset elementor-widget elementor-widget-cs_call_to_action animated fadeInUp"
                  data-id="764982"
                  data-element_type="widget"
                  data-settings="{'_animation':'fadeInUp'}"
                  data-widget_type="cs_call_to_action.default"
                >
                  <div className="elementor-widget-container">
                    <div className="cs-cta cta-layout-text-normal img-offset-border text-center cta-hover-img-zoom">
                      <div className="cs-cta-wrap">
                        <div className="cs-cta-img-wrap">
                          <div className="cs-cta-img">
                            <img
                              decoding="async"
                              width="600"
                              height="449"
                              src={fileUrl + plan.planImage}
                              // "/images/img-57-600x449.jpg"

                              className="attachment-cozystay_600x9999 size-cozystay_600x9999 wp-image-59"
                              alt=""
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                          <div className="cs-offset-border"></div>
                        </div>
                        <div className="cs-cta-overlay"></div>
                        <div className="cs-cta-label label-top-left">
                          <div className="cs-cta-label-text">
                            {/* $160 / Per Sq. Feet */}
                            {plan.planCost}
                          </div>
                        </div>
                        <div className="cs-cta-content">
                          <div className="cs-subtitle-wrap">
                            <span className="cs-subtitle">
                              {/* Basic Plan */}
                              {plan.planSubText}
                            </span>
                          </div>
                          <h6 className="cs-cta-title cs-title">
                            {/* Plan for 10 Floor building */}
                            {plan.planTitle}
                          </h6>
                          <div className="cs-cta-text">
                            <p>
                              {parse(
                                plan.planDescription || ""
                              )}
                              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab reiciendis at ratione, temporibus maxime saepe molestiae, doloremque explicabo facilis dicta neque nulla vitae ut rem dolor, assumenda aliquam. Laboriosam. */}
                            </p>
                          </div>
                          <div className="cs-cta-btn">
                            <a
                              className="button cs-btn-underline"
                              role="button"
                              href="#"
                            >
                              <span className="cs-btn-text">
                                Discover More
                              </span>
                            </a>
                          </div>
                        </div>

                        {/* <a className="cs-cta-link" href="#"></a> */}
                      </div>
                      <EditButton admin={admin} paramId={plan?._id} configId={1}  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2d2e0671"
                                        data-id="2d2e0671" data-element_type="column">
                                        <div
                                            className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-5738ff2a cs-animation-medium-offset elementor-widget elementor-widget-cs_call_to_action animated fadeInUp"
                                                    data-id="5738ff2a" data-element_type="widget"
                                                    data-settings="{'_animation':'fadeInUp','_animation_delay':250}"
                                                    data-widget_type="cs_call_to_action.default">
                                                    <div className="elementor-widget-container">
                                                        <div
                                                            className="cs-cta cta-layout-text-normal img-offset-border text-center cta-hover-img-zoom">
                                                            <div className="cs-cta-wrap">
                                                                <div className="cs-cta-img-wrap">
                                                                    <div className="cs-cta-img">
                                                                        <img decoding="async"
                                                                            width="600" height="450"
                                                                            src="/images/img-58-600x450.jpg"
                                                                            className="attachment-cozystay_600x9999 size-cozystay_600x9999 wp-image-60"
                                                                            alt=""
                                                                            sizes="(max-width: 600px) 100vw, 600px" />
                                                                            
                                                                    </div>
                                                                    <div className="cs-offset-border">
                                                                    </div>
                                                                </div>
                                                                <div className="cs-cta-overlay"></div>
                                                                <div
                                                                    className="cs-cta-label label-top-left">
                                                                    <div className="cs-cta-label-text">
                                                                        $210 / Per Sq. Feet
                                                                    </div>
                                                                </div>
                                                                <div className="cs-cta-content">
                                                                    <div className="cs-subtitle-wrap">
                                                                        <span
                                                                            className="cs-subtitle">Advanced</span>
                                                                    </div>
                                                                    <h6
                                                                        className="cs-cta-title cs-title">
                                                                        Plan for 10-20 floor building
                                                                    </h6>
                                                                    <div className="cs-cta-text">
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sunt laboriosam eos sit veritatis molestias, inventore incidunt amet quia est commodi voluptatum quasi maxime doloribus quos deleniti aliquam quisquam! Quia?
                                                                        </p>
                                                                    </div>
                                                                    <div className="cs-cta-btn">
                                                                        <a className="button cs-btn-underline"
                                                                            role="button" href="#">
                                                                            <span
                                                                                className="cs-btn-text">Discover
                                                                                More</span> </a>
                                                                    </div>
                                                                </div>
                                                                <a className="cs-cta-link" href="#"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3b3eb7f7"
                                        data-id="3b3eb7f7" data-element_type="column">
                                        <div
                                            className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-3451448a cs-animation-medium-offset elementor-widget elementor-widget-cs_call_to_action animated fadeInUp"
                                                    data-id="3451448a" data-element_type="widget"
                                                    data-settings="{'_animation':'fadeInUp','_animation_delay':500}"
                                                    data-widget_type="cs_call_to_action.default">
                                                    <div className="elementor-widget-container">
                                                        <div
                                                            className="cs-cta cta-layout-text-normal img-offset-border text-center cta-hover-img-zoom">
                                                            <div className="cs-cta-wrap">
                                                                <div className="cs-cta-img-wrap">
                                                                    <div className="cs-cta-img">
                                                                        <img decoding="async"
                                                                            width="600" height="450"
                                                                            src="/images/img-59-600x450.jpg"
                                                                            className="attachment-cozystay_600x9999 size-cozystay_600x9999 wp-image-61"
                                                                            alt=""
                                                                            sizes="(max-width: 600px) 100vw, 600px" />
                                                                            
                                                                    </div>
                                                                    <div className="cs-offset-border">
                                                                    </div>
                                                                </div>
                                                                <div className="cs-cta-overlay"></div>
                                                                <div
                                                                    className="cs-cta-label label-top-left">
                                                                    <div className="cs-cta-label-text">
                                                                        $160 / Per Sq. Feet
                                                                    </div>
                                                                </div>
                                                                <div className="cs-cta-content">
                                                                    <div className="cs-subtitle-wrap">
                                                                        <span
                                                                            className="cs-subtitle">Premium</span>
                                                                    </div>
                                                                    <h6
                                                                        className="cs-cta-title cs-title">
                                                                        Plan for 20+ floor building
                                                                    </h6>
                                                                    <div className="cs-cta-text">
                                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloribus quasi beatae consequatur accusamus dolor laboriosam distinctio iure, in molestiae temporibus ullam excepturi eligendi necessitatibus, eaque cumque eum esse qui?
                                                                        </p>
                                                                    </div>
                                                                    <div className="cs-cta-btn">
                                                                        <a className="button cs-btn-underline"
                                                                            role="button" href="#">
                                                                            <span
                                                                                className="cs-btn-text">Discover
                                                                                More</span> </a>
                                                                    </div>
                                                                </div>
                                                                <a className="cs-cta-link" href="#"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
      </div>
    </div>
  </section>
  )
}

export default PlanComponent