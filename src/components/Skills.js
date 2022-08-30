import metter from "./../assets/img/metodologias-ágeis.png";
import components from "./../assets/img/components.png";
import ux from "./../assets/img/ux.png";
import api from "./../assets/img/api.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Estas são algumas habilidades que tive o prazer em aprender.
                <br></br> O caminho é grande e pretendo desenvolver-me e
                aumentar cada vez mais esse quadro.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="Logo HTML"
                  />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="Logo CSS"
                  />

                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="Logo JavaScript"
                  />
                  <h5>JavaScript(ES6)</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="Logo React"
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="Logo Typescript"
                  />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Logo NextJs"
                  />
                  <h5>Next</h5>
                </div>
                <div className="item">
                  <img
                    src={metter}
                    alt="Logo Metodologias ágeis"
                    id="logo-ma"
                  />
                  <h5>Metodologias Ágeis</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Logo Git"
                  />
                  <h5>Controle de versão com git</h5>
                </div>
                <div className="item">
                  <img src={components} alt="Logo styled-components" />
                  <h5>Bibliotecas de componentes</h5>
                </div>
                <div className="item">
                  <img src={ux} alt="Logo UX/UI" id="logo-ux" />
                  <h5>Noções de UX</h5>
                </div>
                <div className="item">
                  <img src={api} alt="Logo api" />
                  <h5>Consumo de APIs</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
