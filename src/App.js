import React, { useEffect, useState } from "react";

// import image from "./assets/process_general.png";
import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
  const object = [1, 2, 3, 4, 5, 6, 7, 8];
  const [process, setProcess] = useState("General");
  const [image, setImage] = useState(
    require("./assets/process_General.png").default
  );

  function handleProcess(e, element) {
    e.preventDefault();

    const image = require(`./assets/process_${element}.png`).default;
    setProcess(element);
    setImage(image);
  }

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h1> Refrigeración líquida </h1>
        </div>

        <div className="app__select">
          <div className="app__select--title">Procesos</div>
          <div className="app__select--options">
            {object.map(element => (
              <button
                onClick={e => handleProcess(e, element)}
                className={
                  process == element
                    ? "app__button--selected"
                    : "app__button--unselected"
                }
              >
                {element}
              </button>
            ))}
          </div>
        </div>

        <div className="app__body">
          <div className="app__left">
            <img
              className="app__image"
              onClick={e => handleProcess(e, "General")}
              src={image}
              alt="image"
            />
          </div>
          <div className="app__right">
            <div className="app__right--title">
              <h3>PROCESO</h3>
            </div>
            <div className="app__right--equations">
              ECUACIONES RELACIONADAS AL PROCESO {process}
              {/* <Cards number={process} /> */}
            </div>
          </div>
        </div>

        <div className="app__footer">INFORMACIÓN DE {process}</div>
      </div>
    </div>
  );
}

export default App;
