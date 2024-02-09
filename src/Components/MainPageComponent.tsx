const MainPageComponent = ({ children }: any) => {
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
                    <div className="elementor-section-wrap">{children}</div>
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

export default MainPageComponent;
