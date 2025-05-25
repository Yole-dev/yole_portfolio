import { useState, useEffect } from "react";

import cartoonPic from "../assets/profile_pic.png";

// imported projects images
import project1 from "../assets/quickaash.png";
import project2 from "../assets/bloomdigitale.png";

export default function Home() {
  return (
    <section className="app-container">
      <Header />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </section>
  );
}

// custom hook to watch screen width changes
function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(
    function () {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    [width]
  );

  return width;
}

function Header() {
  return (
    <section className="header">
      <div className="header-img-div">
        <img
          src={cartoonPic}
          alt="cartoon pic of myself"
          className="cartoon-pic"
        />

        <div className="active-dot"></div>
      </div>

      <div className="intro-text">
        <p>Hello, I'm Godswill Igbava.</p>
        <p>Frontend Web Developer</p>

        <p>I create engaging and responsive web experiences.</p>
      </div>

      <div className="intro-btns">
        <Button border="solid 1px #1e90ff" className="intro-btn">
          <a href="#contact">
            Hire Me
            <span>
              <ion-icon name="alert-outline"></ion-icon>
            </span>
          </a>
        </Button>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <p>About Me</p>

      <div className="bio-div">
        <p className="bio">
          I'm<span> Godswill Owhomaro Igbava</span>, a
          <span> Frontend Developer </span>
          building intuitive interfaces with React, JavaScript and Tailwind CSS.
          While I love crafting clean code, what truly excites me is creating
          experiences that feel effortless, whether through thoughtful UI, smart
          AI integrations, or solutions that actually understand real users.
          <br /> <br />
          That user-first mindset didn't come from nowhere. Years in customer
          service and admin roles taught me how people really interact with
          technology; where they get frustrated, what makes them click, and how
          to solve problems before they arise. When you've handled impatient
          customers and last-minute system fixes, you learn to build interfaces
          that just work.
          <br /> <br />
          Off-screen, you'll find me strategizing on the chessboard or running
          plays on the basketball court - because like development, great
          teamwork is about anticipating moves and playing to each other's
          strengths. Let's build something better.
        </p>

        <img src={cartoonPic} alt="" className="bio-img" />
      </div>
    </section>
  );
}

function SkillSection() {
  return (
    <section className="skill-section">
      <p>Skills</p>

      <div className="skills">
        <Box className="htmlIcon">
          <i class="fa-brands fa-html5"></i>
        </Box>
        <Box className="cssIcon">
          <i class="fa-brands fa-css3-alt"></i>
        </Box>
        <Box className="jsIcon">
          <i class="fa-brands fa-js"></i>
        </Box>
        <Box className="reactIcon">
          <i class="fa-brands fa-react"></i>
        </Box>

        <Box className="tailwindIcon">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        </Box>

        <Box className="gitIcon">
          <i class="fa-brands fa-git-alt"></i>
        </Box>
      </div>
    </section>
  );
}

function ProjectSection() {
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
    <section className="project-section" id="projects">
      <p>Projects</p>

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
                : project.description.split(" ").slice(0, 15).join(" ") +
                  " ..."}
            </p>

            <Button
              background="#02050a"
              border="solid 1px #e6e8eb"
              className="view-btn"
            >
              View Project
              <i class="fa-solid fa-chevron-right"></i>
            </Button>
          </ProjectBox>
        ))}
      </div>
    </section>
  );
}

// reusable components

function Box({ children, className = "" }) {
  return (
    <div className="box">
      <div className={`icon-box ${className}`}>{children}</div>
    </div>
  );
}

function ProjectBox({ children }) {
  return <div className="project-box">{children}</div>;
}

function Button({
  children,
  className = "",
  background = "#080E1B",
  border = "",
}) {
  const btnStyle = {
    background,
    borderRadius: "0.7rem",
    padding: " 1rem 1.5rem ",
    border,
    color: "#FFFFFF",
    cursor: "pointer",
  };

  return (
    <button style={btnStyle} className={className}>
      {children}
    </button>
  );
}
