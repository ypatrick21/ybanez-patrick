// src/components/Home.jsx

function Home() {
  return (
    <section id="home" className="main-page section">
      <div className="col left">
        <div>
          <p className="main-text-first">
            Hello, <span className="primary-color-text">I'm</span>
          </p>
          <h1 className="main-text-name">Patrick Flor Ybañez</h1>
          <p className="main-text-role">Web Developer And Technical Support</p>
          <p className="main-text-description">
            The only way to do great work is to Love what you do.
          </p>
        </div>

        <div className="main-page-links">
          <div>
            <h3>FIND ME ON</h3>
            <div className="social-medias">
              <a
                href="https://www.facebook.com/patrickflor.ybanez"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
              >
                <img src="/images/icons/facebook-svgrepo-com.svg" className="invert-icon" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/impaattyyy/"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
              >
                <img src="/images/icons/instagram-svgrepo-com.svg" className="invert-icon" alt="Instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@pattyy_101"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
              >
                <img src="/images/icons/tiktok-svgrepo-com.svg" className="invert-icon" alt="TikTok" />
              </a>
              <a
                href="https://www.youtube.com/@ybanezpatrickflor7775"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
              >
                <img src="/images/icons/youtube-svgrepo-com.svg" className="invert-icon" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col right">
        <div className="behind-image-bg"></div>
        <img src="/images/patrick.png" className="main-page-image" alt="Patrick Flor Ybañez" />
      </div>
    </section>
  );
}

export default Home;
