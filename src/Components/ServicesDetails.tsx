import parse from "html-react-parser";
import EditButton from "./EditButton";
const ServicesDetails = ({services,configId}:any) => {
    const fileUrl = process.env.REACT_APP_FILE_BASEURL;
    const admin = localStorage.getItem("loggedInUser") || "";
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-c151f7d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="c151f7d"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a1b9579"
          data-id="a1b9579"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-7156aee elementor-widget elementor-widget-cs_rooms"
              data-id="7156aee"
              data-element_type="widget"
              data-widget_type="cs_rooms.default"
            >
              <div className="elementor-widget-container">
                <div className="posts cs-rooms layout-zigzag layout-list img-ratio-3-2">
                  <div className="posts-wrapper cs-rooms-wrapper">
                    {/* <div className="post cs-room-item has-post-thumbnail format-gallery">
                      <div className="featured-img">
                        <a href="https://cozystay.loftocean.com/countryside-lodge/room/vineyard-view-suite/">
                          <ul className="thumbnail-gallery slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                              <div
                                className="slick-track"
                                style={{
                                  opacity: 1,
                                  width: "3913px",
                                  transform: "translate3d(-559px, 0px, 0px)",
                                }}
                              >
                                <li
                                  className="slick-slide slick-cloned"
                                  style={{ width: "559px" }}
                                  role="tabpanel"
                                  id=""
                                  aria-describedby="slick-slide-control02"
                                  data-slick-index="-1"
                                  aria-hidden="true"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="780"
                                    height="475"
                                    src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/sidekix-media-2dToycYRNwY-unsplash-780x475.jpg"
                                    className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                                    alt=""
                                    sizes="(max-width: 780px) 100vw, 780px"
                                  />
                                </li>
                                <li
                                  className="slick-slide slick-current slick-active"
                                  style={{ width: "559px" }}
                                  role="tabpanel"
                                  id="slick-slide00"
                                  aria-describedby="slick-slide-control00"
                                  data-slick-index="0"
                                  aria-hidden="false"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="780"
                                    height="475"
                                    src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/04/img-60-780x475.jpg"
                                    className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                                    alt=""
                                    sizes="(max-width: 780px) 100vw, 780px"
                                  />
                                </li>
                                <li
                                  className="slick-slide"
                                  style={{ width: "559px" }}
                                  role="tabpanel"
                                  id="slick-slide01"
                                  aria-describedby="slick-slide-control01"
                                  data-slick-index="1"
                                  aria-hidden="true"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="780"
                                    height="475"
                                    src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/d5-render-6iASVw2_z3c-unsplash-780x475.jpg"
                                    className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                                    alt=""
                                    sizes="(max-width: 780px) 100vw, 780px"
                                  />
                                </li>
                                <li
                                  className="slick-slide"
                                  style={{ width: "559px" }}
                                  role="tabpanel"
                                  id="slick-slide02"
                                  aria-describedby="slick-slide-control02"
                                  data-slick-index="2"
                                  aria-hidden="true"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="780"
                                    height="475"
                                    src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/sidekix-media-2dToycYRNwY-unsplash-780x475.jpg"
                                    className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                                    alt=""
                                    sizes="(max-width: 780px) 100vw, 780px"
                                  />
                                </li>
                                <li
                                  className="slick-slide slick-cloned"
                                  style={{ width: "559px" }}
                                  role="tabpanel"
                                  id=""
                                  aria-describedby="slick-slide-control00"
                                  data-slick-index="3"
                                  aria-hidden="true"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="780"
                                    height="475"
                                    src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/04/img-60-780x475.jpg"
                                    className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                                    alt=""
                                    sizes="(max-width: 780px) 100vw, 780px"
                                  />
                                </li>
                                <li
                                  className="slick-slide slick-cloned"
                                  style={{ width: "559px" }}
                                  role="tabpanel"
                                  id=""
                                  aria-describedby="slick-slide-control01"
                                  data-slick-index="4"
                                  aria-hidden="true"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="780"
                                    height="475"
                                    src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/d5-render-6iASVw2_z3c-unsplash-780x475.jpg"
                                    className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                                    alt=""
                                    sizes="(max-width: 780px) 100vw, 780px"
                                  />
                                </li>
                                <li
                                  className="slick-slide slick-cloned"
                                  style={{ width: "559px" }}
                                  role="tabpanel"
                                  id=""
                                  aria-describedby="slick-slide-control02"
                                  data-slick-index="5"
                                  aria-hidden="true"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="780"
                                    height="475"
                                    src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/sidekix-media-2dToycYRNwY-unsplash-780x475.jpg"
                                    className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                                    alt=""
                                    sizes="(max-width: 780px) 100vw, 780px"
                                  />
                                </li>
                              </div>
                            </div>
                          </ul>{" "}
                        </a>
                        <div className="slider-arrows">
                          <button
                            className="slick-prev slick-arrow"
                            aria-label="Previous"
                            type="button"
                          >
                            Previous
                          </button>
                          <button
                            className="slick-next slick-arrow"
                            aria-label="Next"
                            type="button"
                          >
                            Next
                          </button>
                        </div>
                        <div className="slider-dots">
                          <ul className="slick-dots" role="tablist">
                            <li className="slick-active" role="presentation">
                              <button
                                type="button"
                                role="tab"
                                id="slick-slide-control00"
                                aria-controls="slick-slide00"
                                aria-label="1 of 3"
                                aria-selected="true"
                              >
                                1
                              </button>
                            </li>
                            <li role="presentation">
                              <button
                                type="button"
                                role="tab"
                                id="slick-slide-control01"
                                aria-controls="slick-slide01"
                                aria-label="2 of 3"
                              >
                                2
                              </button>
                            </li>
                            <li role="presentation">
                              <button
                                type="button"
                                role="tab"
                                id="slick-slide-control02"
                                aria-controls="slick-slide02"
                                aria-label="3 of 3"
                              >
                                3
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="overlay-label">
                          <div className="overlay-label-text">$599 / Night</div>
                        </div>
                      </div>
                      <div className="post-content cs-room-content">
                        <header className="post-header item-header">
                          <div className="item-subtitle">
                            120m² / Vineyard View / 2 Bedrooms
                          </div>
                          <h2 className="post-title item-title">
                            <a href="https://cozystay.loftocean.com/countryside-lodge/room/vineyard-view-suite/">
                              Vineyard View Suite
                            </a>
                          </h2>
                          <div className="cs-room-basic-info">
                            <ul>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-maximize"></i>
                                </div>
                                <span className="csrbi-text">
                                  120 m<sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-user-2"></i>
                                </div>
                                <span className="csrbi-text">4 Guests</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bed-6"></i>
                                </div>
                                <span className="csrbi-text">2 King Beds</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bathing"></i>
                                </div>
                                <span className="csrbi-text">2 Bathrooms</span>
                              </li>
                            </ul>
                          </div>
                        </header>
                        <div className="post-excerpt item-excerpt">
                          <p>
                            The south-facing aspect affords unimpeded views of
                            the Alps. Measuring 42 square metres, with
                            traditional Alpine woods, warm fireplaces, and
                            natural-stone touches.
                          </p>
                        </div>
                        <footer className="post-footer item-footer">
                          <div className="more-btn">
                            <a
                              className="read-more-btn button cs-btn-underline"
                              href="https://cozystay.loftocean.com/countryside-lodge/room/vineyard-view-suite/"
                            >
                              <span>Discover More</span>
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div> */}
                   {
                    services.map((service:any)=>(
<div key={service.Iid} className="post cs-room-item has-post-thumbnail">
                      <div className="featured-img">
                        <a >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="780"
                            height="477"
                            src={fileUrl+service.image}
                            // "https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/marvin-meyer-fBdlytm6Hp8-unsplash-2-780x477.jpg"
                            className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                            alt=""
                            sizes="(max-width: 780px) 100vw, 780px"
                          />
                        </a>
                        {/* <div className="overlay-label">
                          <div className="overlay-label-text">$369 / Night</div>
                        </div> */}
                      </div>
                      <div className="post-content cs-room-content">
                        <header className="post-header item-header">
                          <div className="item-subtitle">
                            {/* 70m² / Private Patio / 1 Bedroom */}
                            {service.subHeading}
                          </div>
                          <h2 className="post-title item-title">
                            <a href="https://cozystay.loftocean.com/countryside-lodge/room/deluxe-treetop-suite/">
                              {/* Deluxe Treetop Suite */}
                              {service.heading}
                            </a>
                          </h2>
                          {/* <div className="cs-room-basic-info">
                            <ul>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-maximize"></i>
                                </div>
                                <span className="csrbi-text">
                                  70 m<sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-user-2"></i>
                                </div>
                                <span className="csrbi-text">3 Guests</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bed-6"></i>
                                </div>
                                <span className="csrbi-text">1 King Bed</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bathing"></i>
                                </div>
                                <span className="csrbi-text">1 Bathroom</span>
                              </li>
                            </ul>
                          </div> */}
                        </header>
                        <div className="post-excerpt item-excerpt">
                          {/* <p>
                            The south-facing aspect affords unimpeded views of
                            the Alps. Measuring 42 square metres, with
                            traditional Alpine woods, warm fireplaces, and
                            natural-stone touches.
                          </p> */}
                          {parse(service.description || '')}
                        </div>
                        <footer className="post-footer item-footer">
                          <div className="more-btn">
                            <EditButton admin={admin} configId={22} paramId={service._id} />
                            {/* <a
                              className="read-more-btn button cs-btn-underline"
                              href="https://cozystay.loftocean.com/countryside-lodge/room/deluxe-treetop-suite/"
                            >
                              <span>Discover More</span>
                            </a> */}
                          </div>
                        </footer>
                      </div>
                    </div>
                    ))
                   }
                    

                    {/* <div className="post cs-room-item has-post-thumbnail">
                      <div className="featured-img">
                        <a href="https://cozystay.loftocean.com/countryside-lodge/room/cottage-room/">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="780"
                            height="475"
                            src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/04/img-61-780x475.jpg"
                            className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                            alt=""
                            sizes="(max-width: 780px) 100vw, 780px"
                          />{" "}
                        </a>
                        <div className="overlay-label">
                          <div className="overlay-label-text">$299 / Night</div>
                        </div>
                      </div>
                      <div className="post-content cs-room-content">
                        <header className="post-header item-header">
                          <div className="item-subtitle">
                            60m² / Estate Winery Views / 1 Bedroom
                          </div>
                          <h2 className="post-title item-title">
                            <a href="https://cozystay.loftocean.com/countryside-lodge/room/cottage-room/">
                              Cottage Room
                            </a>
                          </h2>
                          <div className="cs-room-basic-info">
                            <ul>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-maximize"></i>
                                </div>
                                <span className="csrbi-text">
                                  60 m<sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-user-2"></i>
                                </div>
                                <span className="csrbi-text">2 Guests</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bed-6"></i>
                                </div>
                                <span className="csrbi-text">1 King Bed</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bathing"></i>
                                </div>
                                <span className="csrbi-text">1 Bathroom</span>
                              </li>
                            </ul>
                          </div>
                        </header>
                        <div className="post-excerpt item-excerpt">
                          <p>
                            The south-facing aspect affords unimpeded views of
                            the Alps. Measuring 42 square metres, with
                            traditional Alpine woods, warm fireplaces, and
                            natural-stone touches.
                          </p>
                        </div>
                        <footer className="post-footer item-footer">
                          <div className="more-btn">
                            <a
                              className="read-more-btn button cs-btn-underline"
                              href="https://cozystay.loftocean.com/countryside-lodge/room/cottage-room/"
                            >
                              <span>Discover More</span>
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="post cs-room-item has-post-thumbnail">
                      <div className="featured-img">
                        <a href="https://cozystay.loftocean.com/countryside-lodge/room/standard-room/">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="780"
                            height="520"
                            src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/mk-s-OYpkvbnqvHg-unsplash-780x520.jpg"
                            className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                            alt=""
                            sizes="(max-width: 780px) 100vw, 780px"
                          />{" "}
                        </a>
                        <div className="overlay-label">
                          <div className="overlay-label-text">$279 / Night</div>
                        </div>
                      </div>
                      <div className="post-content cs-room-content">
                        <header className="post-header item-header">
                          <div className="item-subtitle">
                            55m² / Vineyard View / 1 Bedroom
                          </div>
                          <h2 className="post-title item-title">
                            <a href="https://cozystay.loftocean.com/countryside-lodge/room/standard-room/">
                              Standard Room
                            </a>
                          </h2>
                          <div className="cs-room-basic-info">
                            <ul>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-maximize"></i>
                                </div>
                                <span className="csrbi-text">
                                  55 m<sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-user-2"></i>
                                </div>
                                <span className="csrbi-text">2 Guests</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bed-6"></i>
                                </div>
                                <span className="csrbi-text">1 King Bed</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bathing"></i>
                                </div>
                                <span className="csrbi-text">1 Bathroom</span>
                              </li>
                            </ul>
                          </div>
                        </header>
                        <div className="post-excerpt item-excerpt">
                          <p>
                            The south-facing aspect affords unimpeded views of
                            the Alps. Measuring 42 square metres, with
                            traditional Alpine woods, warm fireplaces, and
                            natural-stone touches.
                          </p>
                        </div>
                        <footer className="post-footer item-footer">
                          <div className="more-btn">
                            <a
                              className="read-more-btn button cs-btn-underline"
                              href="https://cozystay.loftocean.com/countryside-lodge/room/standard-room/"
                            >
                              <span>Discover More</span>
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="post cs-room-item has-post-thumbnail">
                      <div className="featured-img">
                        <a href="https://cozystay.loftocean.com/countryside-lodge/room/estate-view-suite/">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="780"
                            height="475"
                            src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/sidekix-media-2dToycYRNwY-unsplash-780x475.jpg"
                            className="attachment-cozystay_780x9999 size-cozystay_780x9999"
                            alt=""
                            sizes="(max-width: 780px) 100vw, 780px"
                          />{" "}
                        </a>
                        <div className="overlay-label">
                          <div className="overlay-label-text">$499 / Night</div>
                        </div>
                      </div>
                      <div className="post-content cs-room-content">
                        <header className="post-header item-header">
                          <div className="item-subtitle">
                            100m² / Estate Winery Views / 1 Bedroom
                          </div>
                          <h2 className="post-title item-title">
                            <a href="https://cozystay.loftocean.com/countryside-lodge/room/estate-view-suite/">
                              Estate View Suite
                            </a>
                          </h2>
                          <div className="cs-room-basic-info">
                            <ul>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-maximize"></i>
                                </div>
                                <span className="csrbi-text">
                                  100 m<sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-user-2"></i>
                                </div>
                                <span className="csrbi-text">2 Guests</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bed-6"></i>
                                </div>
                                <span className="csrbi-text">1 King Bed</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-bathing"></i>
                                </div>
                                <span className="csrbi-text">1 Bathroom</span>
                              </li>
                              <li>
                                <div className="csrbi-icon">
                                  <i className="flaticon flaticon-wifi-2"></i>
                                </div>
                                <span className="csrbi-text">Free WIFI</span>
                              </li>
                            </ul>
                          </div>
                        </header>
                        <div className="post-excerpt item-excerpt">
                          <p>
                            The south-facing aspect affords unimpeded views of
                            the Alps. Measuring 42 square metres, with
                            traditional Alpine woods, warm fireplaces, and
                            natural-stone touches.
                          </p>
                        </div>
                        <footer className="post-footer item-footer">
                          <div className="more-btn">
                            <a
                              className="read-more-btn button cs-btn-underline"
                              href="https://cozystay.loftocean.com/countryside-lodge/room/estate-view-suite/"
                            >
                              <span>Discover More</span>
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div> */}
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

export default ServicesDetails;
