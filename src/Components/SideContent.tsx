import parse from "html-react-parser";

const SideContent = ({
  admin,
  websiteData: {
    banner = {},
    belowBannerText = {},
    qualityText = {},
    plans = [],
    pastWork = [],
    featureHeading = {},
    features = [],
    testimonialHeading = {},
    testimonial = [],
    welcometext = {},
  },
}: any) => {
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  return (
    <div id="content" className="site-content">
      <div className="main">
        <div className="container">
          <div id="primary" className="primary content-area">
            <article className="post-9 page type-page status-publish hentry">
              <div className="entry-content">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id="9"
                  className="elementor elementor-9"
                >
                  <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-60d07609 elementor-section-height-min-height cs-section-content-fullwidth cs_scroll_y_120 cs-parallax-on-scroll elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                        data-id="60d07609"
                        data-element_type="section"
                        data-settings="{'background_background':'classNameic'}"
                        data-cs-parallax-y="120"
                        data-cs-background-image={fileUrl + banner.image}
                      >
                        {/* // "/images/img-50.jpg" */}
                        <div className="parallax-img-container">
                          <img src={fileUrl + banner.image} />
                        </div>
                        <div className="elementor-background-overlay"></div>
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-105f5244 dark-color"
                              data-id="105f5244"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
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
                                            {/* You can trust us  */}
                                          </span>
                                        </div>
                                        <h1 className="cs-title">
                                          Heading {banner.heading}
                                        </h1>
                                        <div className="cs-title-text">
                                          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam sint, quidem sapiente consequatur dolorum distinctio molestias et quas? Porro, minima. Quis omnis iste rem error amet vero? Dolores, quo.
																					</p> */}
                                          {parse(banner.description || "")}
                                        </div>
                                        {admin && (
											 <img
											 onClick={() =>
											   window.open(
												 `admin/main-banner-text-management/edit/${banner._id}`
											   )
											 }
											 src="/images/edit.png"
											 className="edit-icon"
											 alt="Edit"
										   />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-79386528 dark-color elementor-hidden-tablet elementor-hidden-mobile"
                              data-id="79386528"
                              data-element_type="column"
                              data-settings="{'background_background':'classNameic'}"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-background-overlay"></div>
                                <div className="elementor-widget-wrap">
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-3721f659 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="3721f659"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div className="elementor-row">
                                        <div
                                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4d5d7872"
                                          data-id="4d5d7872"
                                          data-element_type="column"
                                        >
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <div
                                                className="elementor-element elementor-element-44d1fab1 elementor-widget elementor-widget-cs_title"
                                                data-id="44d1fab1"
                                                data-element_type="widget"
                                                data-widget_type="cs_title.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="cs-title-wrap text-center">
                                                    <div className="cs-subtitle-wrap">
                                                      {/* <span
																												className="cs-subtitle color-white">Choose
																												Date To
																												Search</span>  */}
                                                    </div>
                                                    <h6 className="cs-title">
                                                      Book an Appointment
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-2877e5e8 elementor-widget elementor-widget-cs_reservation"
                                                data-id="2877e5e8"
                                                data-element_type="widget"
                                                data-widget_type="cs_reservation.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="cs-reservation-form style-block cs-form-square inline-label">
                                                    <form
                                                      className="cs-form-wrap"
                                                      data-date-format="YYYY-MM-DD"
                                                      action=""
                                                      method="GET"
                                                    >
                                                      <div className="cs-form-field cs-check-in">
                                                        <div className="field-wrap">
                                                          <label className="cs-form-label">
                                                            Appointment Date
                                                          </label>
                                                          <div className="field-input-wrap checkin-date">
                                                            <input
                                                              type="text"
                                                              className="date-range-picker"
                                                              value="2023-12-04 - 2023-12-05"
                                                              readOnly
                                                            />
                                                            <input
                                                              type="text"
                                                              value="2023-12-04"
                                                              className="check-in-date"
                                                              name="checkin"
                                                              readOnly
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <div className="cs-form-field cs-rooms ">
                                                        <div>
                                                          <label className="cs-form-label">
                                                            Subject
                                                          </label>
                                                          <div className="">
                                                            <input
                                                              type="text"
                                                              name="rooms"
                                                              readOnly
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="cs-form-field cs-submit">
                                                        <div className="field-wrap">
                                                          <button
                                                            className="button"
                                                            role="button"
                                                            type="submit"
                                                          >
                                                            <span className="btn-text">
                                                              Book Appointment
                                                            </span>
                                                          </button>
                                                        </div>
                                                      </div>
                                                      <input
                                                        type="hidden"
                                                        name="search_rooms"
                                                        value=""
                                                        readOnly
                                                      />
                                                    </form>
                                                  </div>
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
                                        <h3 className="cs-title">
                                          {belowBannerText.title}
                                        </h3>
                                        <div className="cs-title-text">
                                          {parse(
                                            belowBannerText.description || ""
                                          )}
                                        </div>
                                        {admin && (
											<img
											onClick={() =>
											  window.open(
												`admin/below-banner-text-management/edit/${belowBannerText._id}`
											  )
											}
											src="/images/edit.png"
											className="edit-icon"
											alt="Edit"
										  />
                                          
                                        )}
                                        <div className="cs-title-btn">
                                          <a
                                            className="button elementor-button-link cs-btn-color-secondary"
                                            role="button"
                                            href="#"
                                          >
                                            <span className="cs-btn-text">
                                              Explore Process
                                            </span>{" "}
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
                                          {" "}
                                          <span className="list-icon color-primary">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-circle"
                                            ></i>
                                          </span>{" "}
                                          <span className="list-content">
                                            {/* Tools for all type of works */}
                                            {pastWork[0]?.title}
                                          </span>
                                        </li>
                                      </ul>
                                      {admin && (
										<img
										onClick={() =>
										  window.open(
											`admin/past-work-management/edit/${pastWork[0]?._id}`
										  )
										}
										src="/images/edit.png"
										className="edit-icon"
										alt="Edit"
									  />
                                      
                                      )}
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
                                          // "/images/img-53-550x826.jpg"
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
                                          {" "}
                                          <span className="list-icon color-primary">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-circle"
                                            ></i>
                                          </span>{" "}
                                          <span className="list-content">
                                            {/* Expert with making perfect base */}
                                            {pastWork[1]?.title}
                                          </span>
                                        </li>
                                      </ul>
                                      {admin && (
										<img
										onClick={() =>
										  window.open(
											`admin/past-work-management/edit/${pastWork[1]?._id}`
										  )
										}
										src="/images/edit.png"
										className="edit-icon"
										alt="Edit"
									  />
                                      )}
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
                                      {admin && (
										<img
										onClick={() =>
										  window.open(
											`admin/past-work-management/edit/${pastWork[2]?._id}`
										  )
										}
										src="/images/edit.png"
										className="edit-icon"
										alt="Edit"
									  />
                                      )}
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
                                      {admin && (
										<img
										onClick={() =>
										  window.open(
											`admin/past-work-management/edit/${pastWork[3]?._id}`
										  )
										}
										src="/images/edit.png"
										className="edit-icon"
										alt="Edit"
									  />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
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
                                        <span className="cs-btn-text">
                                          Explore More Activities
                                        </span>
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
                        data-cs-background-image="/images/cement_truck.jpeg"
                      >
                        <div className="parallax-img-container">
                          <img src="/images/cement_truck.jpeg" />
                        </div>
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
                                        <img
                                          decoding="async"
                                          width="1024"
                                          height="801"
                                          // src="/images/img-56-1024x801.jpg"
                                          src={fileUrl + qualityText.image}
                                          className="attachment-large size-large wp-image-58"
                                          alt=""
                                          sizes="(max-width: 1024px) 100vw, 1024px"
                                        />
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
                                        <div className="cs-subtitle-wrap">
                                          <span className="cs-subtitle">
                                            {/* Things to make sure before starting work */}
                                            {qualityText.subtitle}
                                          </span>
                                        </div>
                                        <h3 className="cs-title">
                                          {/* Make sure about the quality of work delivered by agency in previously */}
                                          {qualityText.title}
                                        </h3>
                                        <div className="cs-title-text">
                                          <p>
                                            {parse(
                                              qualityText.description || ""
                                            )}
                                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, architecto accusamus. Repellendus, iure dolorum dolores laudantium sapiente exercitationem temporibus fugit deleniti delectus repellat laborum earum! Illo incidunt suscipit dolore quidem! */}
                                          </p>
                                        </div>
                                        {admin && (
											<img
											onClick={() =>
											  window.open(
												`admin/quality-text-management/edit/${qualityText?._id}`
											  )
											}
											src="/images/edit.png"
											className="edit-icon"
											alt="Edit"
										  />
                                        )}
                                        {/* <div className="cs-title-btn">
																					<a className="button elementor-button-link cs-btn-color-secondary"
																						role="button" href="#">
																						<span className="cs-btn-text">View
																							Packages</span> 
																							</a>
																				</div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
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
                                          {admin && (
											<img
											onClick={() =>
											  window.open(
												`admin/plan-management/edit/${qualityText?._id}`
											  )
											}
											src="/images/edit.png"
											className="edit-icon"
											alt="Edit"
										  />
                                          )}
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
										  {parse(welcometext.description || '')}
                                        </div>
										{admin && (
                                          <img
                                            onClick={() =>
                                              window.open(
                                                `/admin/welcome-text-management/edit/${welcometext._id}`
                                              )
                                            }
                                            src="/images/edit.png"
                                            className="edit-icon"
                                            alt="Edit"
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

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
                                        {admin && (
                                          <img
                                            onClick={() =>
                                              window.open(
                                                `/admin/feature-heading-management/edit/${featureHeading._id}`
                                              )
                                            }
                                            src="/images/edit.png"
                                            className="edit-icon"
                                            alt="Edit"
                                          />
                                        )}
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
                                          {features
                                            .reverse()
                                            .map((feat: any) => (
                                              <div className="cs-info-box-item elementor-repeater-item-cccff81">
                                                <div className="cs-item-container">
                                                  {/* <div
																								className="cs-info-box-img">
																								<i aria-hidden="true"
																									className="flaticon flaticon-car"></i>
																							</div> */}
                                                  <div className="cs-info-box-img">
                                                    <img
                                                      src={fileUrl + feat.image}
                                                    />
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
                                                      {parse(
                                                        feat.description || ""
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                                {admin && (
                                                  <img
                                                    onClick={() =>
                                                      window.open(
                                                        `/admin/feature-management/edit/${feat._id}`
                                                      )
                                                    }
                                                    src="/images/edit.png"
                                                    className="edit-icon"
                                                    alt="Edit"
                                                  />
                                                )}
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
                                        <h3 className="cs-title">
                                          {/* What They Say About Us */}
                                          {testimonialHeading.title}
                                        </h3>
                                        {admin && (
                                          <img
                                            onClick={() =>
                                              window.open(
                                                `admin/testimonial-heading-management/edit/${testimonialHeading._id}`
                                              )
                                            }
                                            src="/images/edit.png"
                                            className="edit-icon"
                                            alt="Edit"
                                          />
                                        )}
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
                                              {testimonial.map(
                                                (test: any, index: number) => (
                                                  <div
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
                                                        {parse(
                                                          test.feedback || ""
                                                        )}
                                                      </div>
                                                      <div className="cs-testimonial-meta">
                                                        <div className="elementor-testimonial-meta-inner">
                                                          <div className="elementor-testimonial-image">
                                                            <img
                                                              decoding="async"
                                                              width="140"
                                                              height="140"
                                                              src={
                                                                fileUrl +
                                                                test.picture
                                                              }
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
                                                            {admin && (
                                                              <img
                                                                onClick={() =>
                                                                  window.open(
                                                                    `admin/testimonial-management/edit/${test._id}`
                                                                  )
                                                                }
                                                                src="/images/edit.png"
                                                                className="edit-icon"
                                                                alt="Edit"
                                                              />
                                                            )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )
                                              )}

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
                                          <ul
                                            className="slick-dots"
                                            role="tablist"
                                          >
                                            <li
                                              className=""
                                              role="presentation"
                                            >
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
                                            <li
                                              role="presentation"
                                              className="slick-active"
                                            >
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
                                            <li
                                              role="presentation"
                                              className=""
                                            >
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
                                            <li
                                              role="presentation"
                                              className=""
                                            >
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
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
