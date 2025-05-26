import projectImage from "../assets/quickaash.png";

export default function QuickaashProject() {
  return (
    <section className="project-app-container">
      <Header />
      <PageContent />
    </section>
  );
}

function Header() {
  return (
    <section className="project-heading">
      <p>Quickaash</p>

      <p>
        Quickaash is a loan platform designed to help both businesses and
        individuals easily access credit for their energy needs. Whether you
        need Cooking Gas, CNG, Petrol, Diesel, or to pay your Electricity Bills,
        Quickaash is here to take the financial pressure off.
      </p>
    </section>
  );
}

function PageContent() {
  return (
    <section className="project-content-details">
      <div className="project-content-text">
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          explicabo placeat, perspiciatis delectus incidunt dicta omnis
          laboriosam excepturi a provident porro quos beatae sequi ducimus,
          accusantium esse nostrum libero ipsa.
        </p>
      </div>

      <div className="project-content-text">
        <p className="content-heading">Technologies</p>

        <div className="technologies">
          <p>HTML</p>
          <p>JavaScript</p>
          <p>Tailwind CSS</p>

          <p>PostAPI</p>
          <p>Git</p>
        </div>
      </div>

      <div className="project-content-text">
        <p>Date</p>
        <p>2024</p>
      </div>

      <div className="project-content-text">
        <p>Status</p>
        <p className="status-text">
          Completed
          <span>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </span>
        </p>
      </div>

      <div className="project-content-text">
        <p>Type</p>
        <p>Loan Platform</p>
      </div>

      <div className="project-content-text">
        <p>Client</p>
        <p>Quickaash</p>
      </div>
    </section>
  );
}
