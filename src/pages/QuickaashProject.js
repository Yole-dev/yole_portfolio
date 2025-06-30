import { Link } from "react-router-dom";

// imported components
import ProjectClipsCarousel from "../components/Carousel";
import FadeInAnimation from "../components/FadeInAnimation";
import ComponentAnimation from "../components/ComponentAnimation";

import image1 from "../assets/quickaash.png";
import image2 from "../assets/quickaash_images/image2.png";
import image3 from "../assets/quickaash_images/image1.PNG";

import Button from "../components/Button";

export default function QuickaashProject() {
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
      <p>Quickaash</p>

      <p>
        Quickaash is a loan platform designed to help both businesses and
        individuals easily access credit for their energy needs. Whether you
        need Cooking Gas, CNG, Petrol, Diesel, or to pay your Electricity Bills,
        Quickaash is here to take the financial pressure off.
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
            QuickAash is a fast, secure peer-to-peer (P2P) lending and borrowing
            platform designed to connect everyday people who need quick cash
            with those willing to lend. It offers a simple, transparent way to
            request or offer loans without going through traditional banks.
            Users can create loan offers, accept terms, and track repayments,
            all from a clean, user-friendly interface.
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
            <ion-icon name="checkmark-circle-outline"></ion-icon>
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
      </ComponentAnimation>

      <ComponentAnimation className="project-btns">
        <Button
          border="solid 1px rgba(255, 255, 255, 0.1)"
          className="visit-project-btn"
        >
          <a href="https://quickaash.com/" className="project-link">
            Visit Project
            <ion-icon name="enter-outline"></ion-icon>
          </a>
        </Button>

        <Link to="/bloom_project">
          <Button className="next-btn">
            Next
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Button>
        </Link>
      </ComponentAnimation>
    </>
  );
}
