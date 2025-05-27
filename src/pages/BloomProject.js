import { Link } from "react-router-dom";

// imported reusable components
import ProjectClipsCarousel from "../components/Carousel";
import FadeInAnimation from "../components/FadeInAnimation";
import ComponentAnimation from "../components/ComponentAnimation";

import image1 from "../assets/bloomdigitale.png";
import image2 from "../assets/bloom_images/image1.png";
import image3 from "../assets/bloom_images/image2.png";

import Button from "../components/Button";

export default function BloomProject() {
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
      <p>Bloom Digitale</p>

      <p>
        Bloom Digitale, creates strategic solutions that help brands grow and
        stay ahead of the competition. From web design, branding, UIUX, and
        mobile app development to Flutter development, we craft experiences that
        drive engagement and maximize ROI.
      </p>
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
            A Website showcasing the portfolio and services rendered by Bloom
            Digitale.
          </p>
        </div>

        <div className="project-content-text">
          <p className="content-heading">Technologies</p>

          <div className="technologies">
            <p>React</p>
            <p>JavaScript</p>
            <p>CSS</p>
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
          <p>Startup Tech Company</p>
        </div>

        <div className="project-content-text">
          <p>Client</p>
          <p>Bloom Digitale</p>
        </div>
      </ComponentAnimation>

      <ComponentAnimation className="project-btns">
        <Button
          border="solid 1px rgba(255, 255, 255, 0.1)"
          className="visit-project-btn"
        >
          <a href="https://bloom-revamped.vercel.app/" className="project-link">
            Visit Project
            <ion-icon name="enter-outline"></ion-icon>
          </a>
        </Button>

        <div className="control-btns">
          <Link to="/quickaash_project">
            <Button
              border="solid 1px rgba(255, 255, 255, 0.1)"
              className="prev-btn"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
              Prev
            </Button>
          </Link>

          <Link to="/bloom_project">
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
