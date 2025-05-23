import cartoonPic from "./assets/profile_pic.png";

export default function App() {
  return (
    <section className="app-container">
      <Header />
      <AboutSection />
    </section>
  );
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
        <p>Frontend Developer</p>

        <p>I create engaging and responsive web experiences.</p>
      </div>

      <div className="intro-btns">
        <Button border="none" className="intro-btn view-btn">
          View Projects
        </Button>

        <Button border="solid 1px #1e90ff" className="intro-btn contact-btn">
          Contact Me
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

// reusable button component
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
  };

  return (
    <button style={btnStyle} className={className}>
      {children}
    </button>
  );
}
