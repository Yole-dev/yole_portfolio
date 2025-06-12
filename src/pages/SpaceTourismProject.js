import { Link } from "react-router-dom";

// imported components
import ProjectClipsCarousel from "../components/Carousel";
import FadeInAnimation from "../components/FadeInAnimation";
import ComponentAnimation from "../components/ComponentAnimation";

import image1 from "../assets/space_tourism_images/spacetourism.PNG";
import image2 from "../assets/space_tourism_images/image2.png";
import image3 from "../assets/space_tourism_images/image1.png";

import Button from "../components/Button";

export default function SpaceTourismProject() {
  return (
    <FadeInAnimation className="project-app-container">
      <ProjectClipsCarousel img1={image1} img2={image2} img3={image3} />
      <Header />
      <PageContent />
    </FadeInAnimation>
  );
}

function Header() {
  return (
    <ComponentAnimation className="project-heading">
      <p>Space Tourism</p>

      <p>A fictional space tourism company</p>
    </ComponentAnimation>
  );
}

function PageContent() {
  return (
    <>
      <ComponentAnimation className="project-content-details">
        <div className="project-content-text">
          <p>Description</p>
          <p>
            A multi-page responsive website built based on a Frontend Mentor
            challenge. This project showcases a clean and modern UI for a
            fictional space tourism company, featuring dynamic routing,
            responsive layouts for mobile, tablet, and desktop screens, and
            reusable components. Built with React, Tailwind CSS, and React
            Router, the site demonstrates effective component structure,
            accessibility, and performance optimization practices.
          </p>
        </div>

        <div className="project-content-text">
          <p className="content-heading">Technologies</p>

          <div className="technologies">
            <p>React</p>
            <p>JavaScript</p>
            <p>Tailwind CSS</p>

            <p>React Router</p>
            <p>Git</p>
          </div>
        </div>

        <div className="project-content-text">
          <p>Date</p>
          <p>2025</p>
        </div>

        <div className="project-content-text">
          <p>Status</p>
          <p className="status-text">
            Completed
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </p>
        </div>

        <div className="project-content-text">
          <p>Type</p>
          <p>Space Exploration Company</p>
        </div>

        <div className="project-content-text">
          <p>Client</p>
          <p>Space Tourism</p>
        </div>
      </ComponentAnimation>

      <ComponentAnimation className="project-btns">
        <Button
          border="solid 1px rgba(255, 255, 255, 0.1)"
          className="visit-project-btn"
        >
          <a
            href="https://space-tourism-blush-nine.vercel.app/"
            className="project-link"
          >
            Visit Project
            <ion-icon name="enter-outline"></ion-icon>
          </a>
        </Button>

        <div className="control-btns">
          <Link to="/bloom_project">
            <Button
              border="solid 1px rgba(255, 255, 255, 0.1)"
              className="prev-btn"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
              Prev
            </Button>
          </Link>

          <Link to="/quickaash_project">
            <Button className="next-btn">
              Next
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Button>
          </Link>
        </div>
      </ComponentAnimation>
    </>
  );
}
