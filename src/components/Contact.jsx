// src/components/Contact.jsx

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="header-section">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <form className="contact-form" method="POST">
            <div className="input-container">
              <input placeholder="Enter name" className="input-field" type="text" />
              <label className="input-label">Name</label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input placeholder="Enter email" className="input-field" type="email" />
              <label className="input-label">Email</label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <textarea placeholder="Enter message" className="input-field" rows="5" />
              <label className="input-label">Message</label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container contact-btn">
              <button type="submit" className="primary-btn">Send Message</button>
            </div>
          </form>
        </div>

        <div className="contact-right">
          <h3>Get in touch</h3>
          <p className="b4b4b4">
            If you have any questions or want to work with me, feel free to contact me.
          </p>
          <div className="contact-links">
            <a href="https://www.facebook.com/patrickflor.ybanez" target="_blank" className="contact-link-item">
              <img src="/images/icons/facebook-svgrepo-com.svg" className="contact-link-icon invert-icon" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/impaattyyy/" target="_blank" className="contact-link-item">
              <img src="/images/icons/instagram-svgrepo-com.svg" className="contact-link-icon invert-icon" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@pattyy_101" target="_blank" className="contact-link-item">
              <img src="/images/icons/tiktok-svgrepo-com.svg" className="contact-link-icon invert-icon" alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@ybanezpatrickflor7775" target="_blank" className="contact-link-item">
              <img src="/images/icons/youtube-svgrepo-com.svg" className="contact-link-icon invert-icon" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
