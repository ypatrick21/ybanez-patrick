// src/components/About.jsx

function About() {
  return (
    <section id="about" className="about section">
      <div className="header-section">
        <h2>ABOUT ME</h2>
        <p className="b4b4b4">
          Here you will find some information about me and who I am, what I do, and what I can do for you.
        </p>
      </div>

      <div className="about-content">
        <div className="about-left">
          <img src="/images/about-coverpic.jpg" className="about-coverpic" alt="About Cover" />
        </div>
        <div className="about-right">
          <div className="about-right-header">
            <h2>Get to know me</h2>
          </div>
          <p className="b4b4b4">
            I'm a focused Web developer, making and maintaining Websites that fit to my skills.
            I am a fresh graduate with a Bachelor of Science in Information Technology.
            As of now, I am still improving my skills about web development.
          </p>
          <p className="b4b4b4">
            Not just a Web developer, I am also an IT Support / Technical Support.
            I like to troubleshoot and solve problems about computer systems.
            In short, I am a Web Developer and Technical Support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
