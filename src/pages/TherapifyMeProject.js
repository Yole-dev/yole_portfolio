import { Link } from "react-router-dom";

// imported components
import ProjectClipsCarousel from "../components/Carousel";
import FadeInAnimation from "../components/FadeInAnimation";
import ComponentAnimation from "../components/ComponentAnimation";

import image1 from "../assets/therapify_images/image1.png";
import image2 from "../assets/therapify_images/image2.png";
import image3 from "../assets/therapify_images/image3.png";

import Button from "../components/Button";

export default function TherapifyMeProject() {
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
      <p>TherapifyMe</p>

      <p>An AI-powered mental wellness web application.</p>
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
            TherapifyMe is a supportive AI-powered mental wellness app designed
            to help users express their emotions and receive calming,
            motivational, or reflective voice responses based on how they're
            feeling. Users simply speak into the app, and the AI gently responds
            with a personalized audio message, creating a safe and soothing
            space for self-reflection. It's like having a compassionate digital
            companion that listens and responds thoughtfully — any time,
            anywhere. <br /> <br />
            The app is built using React and TypeScript for the frontend, with
            Supabase handling authentication and user data storage. It
            integrates AI language models for emotional understanding,
            ElevenLabs for lifelike voice responses, and supports mood-based
            journaling and self-care suggestions.
          </p>
        </div>

        <div className="project-content-text">
          <p className="content-heading">Technologies</p>

          <div className="technologies">
            <p>React</p>
            <p>TypeScript</p>
            <p>Tailwind CSS</p>

            <p>React Router</p>
            <p>Supabase</p>
            <p>ElevenLabs</p>
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
          <p>Web Application</p>
        </div>

        <div className="project-content-text">
          <p>Client</p>
          <p>Personal Project</p>
        </div>
      </ComponentAnimation>

      <ComponentAnimation className="project-btns">
        <Button
          border="solid 1px rgba(255, 255, 255, 0.1)"
          className="visit-project-btn"
        >
          <a href="https://therapifyme.netlify.app/" className="project-link">
            Visit Project
            <ion-icon name="enter-outline"></ion-icon>
          </a>
        </Button>

        <div className="control-btns">
          <Link to="/space_tourism_project">
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
