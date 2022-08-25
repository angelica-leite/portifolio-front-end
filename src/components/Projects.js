import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import play from "./../assets/img/playkenzie.png";
import nukenzie from "./../assets/img/nukenzie.png";
import paises from "./../assets/img/paises.png";
import pokemon from "./../assets/img/pokemon.png";

export const Projects = () => {
  const projects = [
    {
      title: "PlayKenzie",
      description:
        "Projeto acadêmico para desenvolver um carrinho de ecommerce.Tecnologias utilizadas: React.js, styled-components, context, Hooks, State Management ",
      repo: "https://github.com/angelica-leite/playKenzie",
      app: "https://react-entrega-s3-kenzishop-com-context-api-angelica-leite.vercel.app",
      img: play,
    },
    {
      title: "NuKenzie",
      description:
        "Projeto acadêmico para desenvolver uma plataforma de controle de finanças.Tecnologias utilizadas: React.js, Hooks, State Management ",
      repo: "https://github.com/angelica-leite/NuKenzie",
      app: "https://react-entrega-s1-nu-kenzie-angelica-leite.vercel.app",
      img: nukenzie,
    },
    {
      title: "Lista de Países",
      description:
        "Projeto pessoal para desenvolver uma aplicação em React de uma lista de países, consultando a API Countries. Tecnologias utilizadas: React.ts, Typescript, Fetch API, GraphQL , State Management  ",
      repo: "https://github.com/angelica-leite/lista-de-paises",
      app: "https://lista-de-paises.vercel.app",
      img: paises,
    },
    {
      title: "Catálogo Pokémon",
      description:
        "Projeto pessoal para criar um catálogo do card game de Pokémon. Utilizando as tecnologias Typescript, React e Next.",
      repo: "https://github.com/angelica-leite/pokemon-catalogue",
      app: "https://react-entrega-s3-kenzishop-com-context-api-angelica-leite.vercel.app",
      img: pokemon,
    },
  ];

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
