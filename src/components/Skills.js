import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
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
                  <img src={meter1} alt="Imagem loading" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Imagem loading" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Imagem loading" />
                  <h5>JavaScript(ES6)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Imagem loading" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Imagem loading" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Imagem loading" />
                  <h5>Next</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Imagem loading" />
                  <h5>Metodologias Ágeis</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Imagem loading" />
                  <h5>Programação Orientada a Objetos</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Imagem loading" />
                  <h5>Controle de versão com git</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Imagem loading" />
                  <h5>Bibliotecas de componentes</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Imagem loading" />
                  <h5>Noções de UX</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Imagem loading" />
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
