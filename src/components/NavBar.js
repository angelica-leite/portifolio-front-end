import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import whatsapp from "../assets/img/whatsapp.svg";

export const NavBar = () => {
  const { activeLink, setActiveLink } = useState("home");
  const { scrolled, setScrolled } = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">{"<Angélica />"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/angelica-silva-leite/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Icon to Linkedin" />
              </a>
              <a
                href="https://github.com/angelica-leite"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Icon to Github" />
              </a>
              <a
                href="https://wa.me/5561991771433"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="Icon" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
