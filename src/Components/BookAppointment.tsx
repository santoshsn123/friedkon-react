import React from "react";

const BookAppointment = () => {
  return (
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
                              BookAppointment                                                                    Date To
                                                                                                  Search</span>  */}
                      </div>
                      <h6 className="cs-title">Book an Appointment</h6>
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
                              />
                              <input
                                type="text"
                                value="2023-12-04"
                                className="check-in-date"
                                name="checkin"
                              />
                             
                            </div>
                          </div>
                        </div>

                        <div className="cs-form-field cs-rooms ">
                          <div>
                            <label className="cs-form-label">Subject</label>
                            <div className="">
                              <input type="text" name="rooms" readOnly />
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
                              <span className="btn-text">Book Appointment</span>
                            </button>
                          </div>
                        </div>
                        <input type="hidden" name="search_rooms" readOnly />
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
  );
};

export default BookAppointment;
