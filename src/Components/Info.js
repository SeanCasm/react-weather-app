import React from "react";
import { Logo } from "./Logo";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Copyright } from "./Copyright";
export const Info = ({ setClose }) => {
  const handleClose = () => {
    setClose();
  };
  return (
    <div className="info-panel card ">
      <main className="container d-flex flex-column ">
        <header className="d-flex ">
          <Logo logoColor="black" />
          <div className=" flex-fill text-end">
            <button className="btn-no-decoration" onClick={handleClose}>
              <AiOutlineCloseCircle style={{ width: 32, height: 32 }} />
            </button>
          </div>
        </header>
        <hr/>
        <div className="d-flex flex-column mt-3">
          <section className="card-main-content">
            <p>
              Aplicación construida utilizando{" "}
              <a href="https://es.reactjs.org" target="_blank" rel="noreferrer">
                <span className="react">React</span>,{" "}
              </a>
              <a
                href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bootstrap">Bootstrap</span>
              </a>
              , Axios y la api de OpenWeather.
              <br />
              <br />
              Los datos mostrados pueden no ser exactos, lo cual no es 100% de
              fiar y solo debe tomarse como una referencia cercana al estado del
              tiempo, el fin de esta web es demostrar experiencia en el uso de
              las herramientas antes mencionadas.
              <br />
              <br />
              Al tratarse de un sitio de prueba, este no contara con
              actualizaciones continuas.
              <br />
              <br />
            </p>
            <Copyright />
          </section>
        </div>
      </main>
    </div>
  );
};
