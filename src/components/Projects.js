import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { projects } from "./../database";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Estes são alguns projetos que foram desenvolvidos para
                    treinar, aprender e desenvolver todo conhecimento adquirido
                    ao longo dessa jornada. Pretendo evoluir e sempre
                    melhorá-los com novos conhecimentos adquiridos, além de
                    aumentar esse catálogo.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
