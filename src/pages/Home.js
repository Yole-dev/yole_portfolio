// imported Hooks
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useScreenWidth from "../components/useScreenWidth";

// imported projects images
import cartoonPic from "../assets/profile_pic.png";
import bioPic from "../assets/bio_pic.webp";
import project1 from "../assets/quickaash.png";
import project2 from "../assets/bloomdigitale.png";

// imported components
import Button from "../components/Button";
import ProjectBox from "../components/ProjectBox";

// imported animation component
import FadeInAnimation from "../components/FadeInAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import TextAnimation from "../components/TextAnimation";

export default function Home() {
  return (
    <FadeInAnimation className="app-container">
      <Header />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Experience />
      <Contact />
    </FadeInAnimation>
  );
}

function Header() {
  return (
    <ComponentAnimation className="header">
      <div className="header-img-div">
        <img
          src={cartoonPic}
          alt="cartoon pic of myself"
          className="cartoon-pic"
        />

        <div className="active-dot"></div>
      </div>

      <div className="intro-text">
        <p>
          Hello,{" "}
          <TextAnimation
            text="I'm Godswill Igbava."
            duration={3}
            animationType="typing"
          />
        </p>
        <p>Frontend Web Developer</p>

        <p>I create engaging and responsive web experiences.</p>
      </div>

      <div className="intro-btns">
        <Button
          border="solid 1px rgba(255, 255, 255, 0.1)"
          className="intro-btn"
        >
          <a href="#contact">
            Hire Me
            <span>
              <ion-icon name="alert-outline"></ion-icon>
            </span>
          </a>
        </Button>
      </div>
    </ComponentAnimation>
  );
}

function AboutSection() {
  return (
    <ComponentAnimation className="about-section">
      <p>About Me</p>

      <ComponentAnimation className="bio-div">
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

        <img src={bioPic} alt="" className="bio-img" />
      </ComponentAnimation>
    </ComponentAnimation>
  );
}

function SkillSection() {
  return (
    <ComponentAnimation className="skill-section">
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
    </ComponentAnimation>
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
      path: "/quickaash_project",
    },

    {
      id: "bloom digitale",
      companyName: "Bloom Digitale",
      description:
        "At Bloom Digitale, we create strategic solutions that help brands grow and stay ahead of the competition. From web design, branding, UIUX, and mobile app development to Flutter development, we craft experiences that drive engagement and maximize ROI.",
      imageSrc: `${project2}`,
      path: "/bloom_project",
    },
  ];

  return (
    <ComponentAnimation className="project-section" id="projects">
      <p>what i have been up to.</p>

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

            <Link to={project.path} className="project-link-btn">
              <Button
                background="#02050a"
                border="solid 1px rgba(255, 255, 255, 0.1)"
                className="view-btn"
              >
                View Project
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </Button>
            </Link>
          </ProjectBox>
        ))}
      </div>

      <Link to="/projects">
        <Button
          border="solid 1px rgba(255, 255, 255, 0.1)"
          className="view-all-projects-btn"
        >
          View All Projects
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Button>
      </Link>
    </ComponentAnimation>
  );
}

function Experience() {
  const experienceData = [
    {
      year: "2023 - Present",
      location: "Remote",
      position: "Frontend Developer",
      company: "Bloom Digitale",
    },

    {
      year: "2022 - 2022",
      location: "Lagos",
      position: "Frontend Dev. Tutor",
      company: "ITech Hub",
    },
  ];

  return (
    <ComponentAnimation className="experience-section">
      <p>work experience</p>

      <div className="experience">
        {experienceData.map((experience) => (
          <div className="experience-detail" key={experience.company}>
            <div className="experience-detail-item">
              <p className="year">{experience.year}</p>

              <p className="location">
                <span>
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                {experience.location}
              </p>
            </div>

            <div className="experience-detail-item">
              <p className="position">{experience.position}</p>

              <p className="company">{experience.company}</p>
            </div>
          </div>
        ))}
      </div>
    </ComponentAnimation>
  );
}

function Contact() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function sendEmailMessage() {
        setIsLoading(true);
        try {
          const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                service_id: "service_8ku20jn",
                template_id: "template_hiizfrd",
                user_id: "K-c-JQucCIXu54R1_",
                template_params: {
                  name: fullName,
                  email: emailAddress,
                  message: message,
                },
              }),
            }
          );
          if (!response.ok)
            throw new Error("Failed to send message, please try again. 🙏🏾🥺🙏🏾");

          alert("Message sent successfully 🎉🎉");
          setFullName("");
          setEmailAddress("");
          setMessage("");
        } catch (err) {
          alert(err.message);
        } finally {
          setIsSubmitted(false);
          setIsLoading(false);
        }
      }

      if (isSubmitted) sendEmailMessage();
    },
    [isSubmitted, fullName, emailAddress, message]
  );

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <ComponentAnimation className="contact-section" id="contact">
      <p>want to talk?</p>
      <p>
        Got a project or want to brainstorm frontend solutions? I'd love to
        connect. My customer service background helps me build interfaces that
        actually make sense to people. <br /> <br /> So send a mail, message or
        DM on X.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <Button
          type="submit"
          border="solid 1px rgba(255, 255, 255, 0.1)"
          className="submit-btn"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Let's Talk"}
          <ion-icon name="paper-plane-outline"></ion-icon>
        </Button>
      </form>
    </ComponentAnimation>
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
