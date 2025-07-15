// src/components/Projects.jsx

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="header-section">
        <h2>PROJECTS</h2>
        <p className="b4b4b4">Here are some of my projects that I have worked on.</p>
      </div>

      <div className="project-content">
        <div className="card-project card-large">
          <div className="card-image">
            <img className="card-img-item" src="/images/projects/bis.png" alt="Barangay Info System" />
          </div>
          <div className="card-header">
            <h3 className="card-title">Barangay Information System</h3>
          </div>
          <div className="card-body">
            <p>
              A capstone project web-based application designed to manage and streamline the ...
            </p>
            {/* <p>
              A capstone project web-based application designed to manage and streamline the operations of a barangay (village)
              in the Philippines. It provides features for managing resident information, request documents such as certificates, and generating reports.
            </p> */}
          </div>
          <div className="card-footer">
            <a href="#" className="primary-btn">See more</a>
          </div>
        </div>

        <div className="card-project card-large">
          <div className="card-image">
            <img className="card-img-item" src="/images/projects/pos.PNG" alt="POS System" />
          </div>
          <div className="card-header">
            <h3 className="card-title">Point of Sale Web-based System</h3>
          </div>
          <div className="card-body">
            <p>
              A web-based system that allows users to manage sales transactions, inventor...
            </p>
            {/* <p>
              A web-based system that allows users to manage sales transactions, inventory, and customer information in an offline environment. It is designed to work without a constant internet connection, making it ideal for small businesses needing reliable point-of-sale operations even when offline.
            </p> */}
          </div>
          <div className="card-footer">
            <a href="#" className="primary-btn">See more</a>
          </div>
        </div>

        <div className="card-project card-large">
          <div className="card-image">
            <img className="card-img-item" src="/images/projects/mynote-app.png" alt="MyNote WebApp" />
          </div>
          <div className="card-header">
            <h3 className="card-title">MyNote WebApp</h3>
          </div>
          <div className="card-body">
            <p>
              A simple web application designed to help users manage their notes and tasks efficien...
            </p>
            {/* <p>
              A simple web application designed to help users manage their notes and tasks efficiently. It provides a user-friendly interface for creating, editing, and organizing notes, making it easy to keep track of important information and tasks.
            </p> */}
          </div>
          <div className="card-footer">
            <a href="#" className="primary-btn">See more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
