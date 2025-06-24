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
            Although, I don’t have already an experience in IT companies yet, but during this time I am continue learning new things in technologies like programming languages, frameworks, API and so on.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
