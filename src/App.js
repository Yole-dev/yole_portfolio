import cartoonPic from "./assets/profile_pic.png";

export default function App() {
  return (
    <section className="app-container">
      <Header />
    </section>
  );
}

function Header() {
  return (
    <div className="header">
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
    </div>
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
