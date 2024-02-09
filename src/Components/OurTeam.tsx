const OurTeam = ({ teams = [], configId }: any) => {
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  console.log('checking teams',teams)
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-eb8241f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="eb8241f"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-76566c7"
              data-id="76566c7"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-0a75012 elementor-widget elementor-widget-cs_title"
                    data-id="0a75012"
                    data-element_type="widget"
                    data-widget_type="cs_title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="cs-title-wrap text-center">
                        <div className="cs-subtitle-wrap">
                          <span className="cs-subtitle">
                            Welcome to CozyStay Lodge
                          </span>
                        </div>
                        <h3 className="cs-title">Meet Our Team </h3>
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
        className="elementor-section elementor-top-section elementor-element elementor-element-ab6331b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="ab6331b"
        data-element_type="section"
        style={{ margin: '60px 0'}}
      >
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-row">
            {teams.map((team: any) => (
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-32c9b7c"
                data-id="32c9b7c"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-efb5fff cs-animation-medium-offset elementor-widget elementor-widget-cs_team animated fadeInUp"
                      data-id="efb5fff"
                      data-element_type="widget"
                      data-settings='{"_animation":"fadeInUp"}'
                      data-widget_type="cs_team.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="cs-team style-overlay text-left">
                          <div className="cs-team-photo">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="550"
                              height="692"
                              //   src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/jake-nackos-IF9TK5Uy-KI-unsplash-550x692.jpg"
                              src={fileUrl + team.image}
                              className="attachment-cozystay_550x9999 size-cozystay_550x9999 wp-image-414"
                              alt=""
                              sizes="(max-width: 550px) 100vw, 550px"
                            />
                          </div>
                          <div className="cs-team-info">
                            <span className="cs-subtitle cs-team-position color-white">
                              {team.position}
                            </span>
                            <h5 className="cs-title cs-team-name">
                              {team.name}
                            </h5>
                            <div className="cs-team-social">
                              <ul className="social-nav menu">
                                {team.facebook && (
                                  <li>
                                    <a href={team.facebook} target="_blank">
                                      Facebook
                                    </a>
                                  </li>
                                )}
                                {team.twitter && (
                                  <li>
                                    <a href={team.twitter} target="_blank">
                                      Twitter
                                    </a>
                                  </li>
                                )}
                                {team.youtube && (
                                  <li>
                                    <a href={team.youtube} target="_blank">
                                      YouTube
                                    </a>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b693de1"
              data-id="b693de1"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-eeb0339 cs-animation-medium-offset elementor-widget elementor-widget-cs_team animated fadeInUp"
                    data-id="eeb0339"
                    data-element_type="widget"
                    data-settings='{"_animation":"fadeInUp","_animation_delay":250}'
                    data-widget_type="cs_team.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="cs-team style-overlay text-left">
                        <div className="cs-team-photo">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="550"
                            height="692"
                            src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/team-member-1-550x692.jpg"
                            className="attachment-cozystay_550x9999 size-cozystay_550x9999 wp-image-415"
                            alt=""
                          />
                        </div>
                        <div className="cs-team-info">
                          <span className="cs-subtitle cs-team-position color-white">
                            Chef Financial Officer
                          </span>
                          <h5 className="cs-title cs-team-name">
                            Micheal Harris
                          </h5>
                          <div className="cs-team-social">
                            <ul className="social-nav menu">
                              <li>
                                <a href="https://facebook.com">Facebook</a>
                              </li>
                              <li>
                                <a href="https://twitter.com">Twitter </a>
                              </li>
                              <li>
                                <a href="https://youtube.com">YouTube </a>
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
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b1386f6"
              data-id="b1386f6"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-fff992d cs-animation-medium-offset elementor-widget elementor-widget-cs_team animated fadeInUp"
                    data-id="fff992d"
                    data-element_type="widget"
                    data-settings='{"_animation":"fadeInUp","_animation_delay":500}'
                    data-widget_type="cs_team.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="cs-team style-overlay text-left">
                        <div className="cs-team-photo">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="550"
                            height="692"
                            src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/team-member-3-550x692.jpg"
                            className="attachment-cozystay_550x9999 size-cozystay_550x9999 wp-image-423"
                            alt=""
                            sizes="(max-width: 550px) 100vw, 550px"
                          />
                        </div>
                        <div className="cs-team-info">
                          <span className="cs-subtitle cs-team-position color-white">
                            Manager
                          </span>
                          <h5 className="cs-title cs-team-name">
                            Shelly Owens
                          </h5>
                          <div className="cs-team-social">
                            <ul className="social-nav menu">
                              <li>
                                <a href="https://facebook.com">Facebook</a>
                              </li>
                              <li>
                                <a href="https://twitter.com">Twitter </a>
                              </li>
                              <li>
                                <a href="https://youtube.com">YouTube </a>
                              </li>
                            </ul>
                          </div>
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
    </>
  );
};

export default OurTeam;
