import { Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import link from "../assets/img/link.svg";

export const ProjectCard = ({ title, description, img, repo, app }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <h4>{title}</h4>
      <div className="proj-imgbx">
        <img src={img} alt="Imagem do projeto" />
        <div className="proj-txtx">
          <span>{description}</span>
          <div className="social-icon">
            <figure>
              <a href={repo} target="_blank" rel="noreferrer">
                <img src={github} alt="Icon to Github" />
              </a>
              <figcaption>GitHub</figcaption>
            </figure>
            <figure className="icon">
              <a href={app} target="_blank" rel="noreferrer">
                <img src={link} alt="Icon to Vercel" />
              </a>
              <figcaption>Vercel</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Col>
  );
};
