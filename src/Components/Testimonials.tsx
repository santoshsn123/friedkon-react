import parse from "html-react-parser";
import EditButton from "./EditButton";

const Testimonials = ({ testimonialHeading = {}, testimonial = [] }: any) => {
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-7cbcf1b6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="7cbcf1b6"
      data-element_type="section"
      data-settings="{'background_background':'classNameic'}"
    >
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-27c5fa0c"
            data-id="27c5fa0c"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-5412a0ca cs-animation-small-offset elementor-widget elementor-widget-cs_title animated fadeInUp"
                  data-id="5412a0ca"
                  data-element_type="widget"
                  data-settings="{'_animation':'fadeInUp'}"
                  data-widget_type="cs_title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="cs-title-wrap text-center">
                      <div className="cs-subtitle-wrap">
                        <span className="cs-subtitle">
                          {/* Feedback From Our Customers */}
                          {testimonialHeading.subTitle}
                        </span>
                      </div>
                      <h3 className="cs-title">{testimonialHeading.title}</h3>
                      <EditButton
                        admin={admin}
                        paramId={testimonialHeading._id}
                        configId={9}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-78adde68 cs-animation-small-offset elementor-widget elementor-widget-cs_testimonials animated fadeInUp"
                  data-id="78adde68"
                  data-element_type="widget"
                  data-settings="{'_animation':'fadeInUp','_animation_delay':300}"
                  data-widget_type="cs_testimonials.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="cs-testimonials testimonial-style-1 text-center testimonials-slider"
                      data-column="3"
                      data-autoplay="on"
                      data-autoplay-speed="5000"
                      data-show-arrows=""
                      data-show-dots="on"
                    >
                      <div className="cs-ts-wrap slick-initialized slick-slider slick-dotted">
                        <div className="slick-list draggable">
                          <div className="slick-track">
                            {testimonial.map((test: any, index: number) => (
                              <div
                                key={test._id}
                                className="cs-ts-item slick-slide slick-cloned"
                                data-slick-index="-3"
                                id=""
                                aria-hidden="true"
                              >
                                <div className="cs-testimonial">
                                  {/* <div
                                                                                        className="cs-testimonial-rating">
                                                                                        <span
                                                                                            className="cs-testimonial-stars"></span>
                                                                                    </div> */}
                                  <div className="cs-testimonial-content">
                                    {/* “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo distinctio ipsa hic, accusamus consequuntur, rerum quibusdam error modi dolorum vitae velit quas, quos minima eius voluptas quia labore! Illo, totam.” */}
                                    {parse(test.feedback || "")}
                                  </div>
                                  <div className="cs-testimonial-meta">
                                    <div className="elementor-testimonial-meta-inner">
                                      <div className="elementor-testimonial-image">
                                        <img
                                          decoding="async"
                                          width="140"
                                          height="140"
                                          src={fileUrl + test.picture}
                                          // "/images/quote-author.png"
                                          className="attachment-thumbnail size-thumbnail wp-image-69"
                                          alt=""
                                        />
                                      </div>
                                      <div className="elementor-testimonial-details">
                                        <div className="elementor-testimonial-name">
                                          {/* Joseph
                                                                                                    Hart */}
                                          {test.name}
                                        </div>
                                        <div className="elementor-testimonial-job">
                                          {/* Contruction CEO */}
                                          {test.position}
                                        </div>
                                        <EditButton
                                          admin={admin}
                                          paramId={test._id}
                                          configId={10}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {/* <div className="cs-ts-item slick-slide slick-cloned"
                                                                            data-slick-index="-2"
                                                                            id="" aria-hidden="true">
                                                                            <div
                                                                                className="cs-testimonial">
                                                                                <div
                                                                                    className="cs-testimonial-rating">
                                                                                    <span
                                                                                        className="cs-testimonial-stars"></span>
                                                                                </div>
                                                                                <div
                                                                                    className="cs-testimonial-content">
                                                                                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis asperiores omnis placeat minus sequi, cumque blanditiis quam eligendi. Nisi perferendis maiores eveniet consequatur error optio totam quae? Facere, quas!”
                                                                                </div>
                                                                                <div
                                                                                    className="cs-testimonial-meta">
                                                                                    <div
                                                                                        className="elementor-testimonial-meta-inner">
                                                                                        <div
                                                                                            className="elementor-testimonial-image">
                                                                                            <img decoding="async"
                                                                                                width="150"
                                                                                                height="150"
                                                                                                src="/images/quote-author-3-150x150.jpg"
                                                                                                className="attachment-thumbnail size-thumbnail wp-image-70"
                                                                                                alt=""
                                                                                                
                                                                                                sizes="(max-width: 150px) 100vw, 150px" />
                                                                                        </div>
                                                                                        <div
                                                                                            className="elementor-testimonial-details">
                                                                                            <div
                                                                                                className="elementor-testimonial-name">
                                                                                                Sophie
                                                                                                Laurier
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-testimonial-job">
                                                                                                Contruction CEO
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cs-ts-item slick-slide slick-cloned"
                                                                            data-slick-index="-1"
                                                                            id="" aria-hidden="true">
                                                                            <div
                                                                                className="cs-testimonial">
                                                                                <div
                                                                                    className="cs-testimonial-rating">
                                                                                    <span
                                                                                        className="cs-testimonial-stars"></span>
                                                                                </div>
                                                                                <div
                                                                                    className="cs-testimonial-content">
                                                                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempora, consequuntur unde vitae quod molestias facilis quia. Vero eius recusandae ad blanditiis libero explicabo. Repellendus qui aliquid eos quos id.”
                                                                                </div>
                                                                                <div
                                                                                    className="cs-testimonial-meta">
                                                                                    <div
                                                                                        className="elementor-testimonial-meta-inner">
                                                                                        <div
                                                                                            className="elementor-testimonial-image">
                                                                                            <img decoding="async"
                                                                                                width="150"
                                                                                                height="150"
                                                                                                src="/images/quote-author-4-150x150.jpg"
                                                                                                className="attachment-thumbnail size-thumbnail wp-image-71"
                                                                                                alt=""
                                                                                                sizes="(max-width: 150px) 100vw, 150px" />
                                                                                        </div>
                                                                                        <div
                                                                                            className="elementor-testimonial-details">
                                                                                            <div
                                                                                                className="elementor-testimonial-name">
                                                                                                Erin
                                                                                                Pierce
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-testimonial-job">
                                                                                                Contruction CEO
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div> */}
                          </div>
                        </div>
                        <ul className="slick-dots" role="tablist">
                          <li className="" role="presentation">
                            <button
                              type="button"
                              role="tab"
                              id="slick-slide-control10"
                              aria-controls="slick-slide10"
                              aria-label="1 of 2"
                            >
                              1
                            </button>
                          </li>
                          <li role="presentation" className="slick-active">
                            <button
                              type="button"
                              role="tab"
                              id="slick-slide-control11"
                              aria-controls="slick-slide11"
                              aria-label="2 of 2"
                              aria-selected="true"
                            >
                              2
                            </button>
                          </li>
                          <li role="presentation" className="">
                            <button
                              type="button"
                              role="tab"
                              id="slick-slide-control12"
                              aria-controls="slick-slide12"
                              aria-label="3 of 2"
                            >
                              3
                            </button>
                          </li>
                          <li role="presentation" className="">
                            <button
                              type="button"
                              role="tab"
                              id="slick-slide-control13"
                              aria-controls="slick-slide13"
                              aria-label="4 of 2"
                            >
                              4
                            </button>
                          </li>
                        </ul>
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

export default Testimonials;
