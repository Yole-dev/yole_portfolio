// import screen width watcher hook
import useScreenWidth from "../components/useScreenWidth";

// imported images
import project1 from "../assets/quickaash.png";
import project2 from "../assets/bloomdigitale.png";

// imported components
import Button from "../components/Button";
import ProjectBox from "../components/ProjectBox";

export default function Projects() {
  return (
    <section className="projects-app-container">
      <Header />
      <AllProjects />
    </section>
  );
}

function Header() {
  return <p className="projects-heading">what i have been up to lately.</p>;
}

function AllProjects() {
  const screenWidth = useScreenWidth();

  const projectData = [
    {
      id: "quickaash",
      companyName: "Quickaash",
      description:
        "Quickaash is a loan platform designed to help both businesses and individuals easily access credit for their energy needs. Whether you need Cooking Gas, CNG, Petrol, Diesel, or to pay your Electricity Bills, Quickaash is here to take the financial pressure off.",
      imageSrc: `${project1}`,
    },

    {
      id: "bloom digitale",
      companyName: "Bloom Digitale",
      description:
        "At Bloom Digitale, we create strategic solutions that help brands grow and stay ahead of the competition. From web design, branding, UIUX, and mobile app development to Flutter development, we craft experiences that drive engagement and maximize ROI.",
      imageSrc: `${project2}`,
    },
  ];
  return (
    <div className="projects-container">
      {projectData.map((project) => (
        <ProjectBox key={project.id}>
          <div className="project-img-container">
            <img src={project.imageSrc} alt="" />
          </div>

          <p className="project-name">{project.companyName}</p>
          <p className="project-description">
            {screenWidth > 500
              ? project.description
              : project.description.split(" ").slice(0, 15).join(" ") + " ..."}
          </p>

          <Button
            background="#02050a"
            border="solid 1px #e6e8eb"
            className="view-btn"
          >
            View Project
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Button>
        </ProjectBox>
      ))}
    </div>
  );
}
