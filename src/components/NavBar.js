import { Navbar, Nav, Container } from "react-bootstrap";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import { saveAs } from "file-saver";

export const NavBar = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/17v3P9SBxb9N157NKtv0JgZR8kI7Pfj6c/view?usp=sharing"
    );
  };

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#home">{"<Angélica />"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navbar-link">
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="navbar-link">
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
            <button className="vvd" onClick={() => saveFile()}>
              <span>Download CV</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
