// src/components/Skills.jsx

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="header-section">
        <h2>Skills</h2>
        <p className="b4b4b4">I constantly try to improve.</p>
      </div>

      <h3 className="soft-skills-title">Soft Skills</h3>
      <div className="soft-skills">
        <div className="card card-small">
          <div className="card-header">
            <h3 className="card-title">Non-stop Learning</h3>
          </div>
          <div className="card-body">
            <p>
              Technology never stops updating. That’s why those who work with tech should always keep learning.
            </p>
          </div>
        </div>
        <div className="card card-small">
          <div className="card-header">
            <h3 className="card-title">Communicative</h3>
          </div>
          <div className="card-body">
            <p>
              No matter your profession, communication is always a key skill in any field.
            </p>
          </div>
        </div>
        <div className="card card-small">
          <div className="card-header">
            <h3 className="card-title">Open-minded</h3>
          </div>
          <div className="card-body">
            <p>
              Working with people means accepting new ideas from clients or teammates and turning them into action.
            </p>
          </div>
        </div>
      </div>

      <div className="hard-skills">
        <h3>Tech Stacks</h3>
        <div className="tech-stacks">
          <div className="tech-item">
            <i className="devicon-item devicon-html5-plain colored"></i>
            <span>HTML5</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-css3-plain colored"></i>
            <span>CSS3</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-php-plain colored"></i>
            <span>PHP</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-javascript-plain colored"></i>
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-tailwindcss-original colored"></i>
            <span>Tailwind CSS</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-laravel-plain colored"></i>
            <span>Laravel</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-react-original colored"></i>
            <span>React</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-bootstrap-plain colored"></i>
            <span>Bootstrap</span>
          </div>
          <div className="tech-item">
            <i className="devicon-item devicon-canva-original colored"></i>
            <span>Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
