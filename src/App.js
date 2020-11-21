import React, { useEffect, useState } from "react";

import image from "./assets/mainImageWBG.png";
import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
  const object = [1, 2, 3, 4, 5, 6, 7, 8];
  const [process, setProcess] = useState("General");

  function handleProcess(e, element) {
    e.preventDefault();

    setProcess(element);
  }

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h1> Refrigeración líquida </h1>
        </div>

        <div className="app__process">
          <div className="app__process--title">Procesos</div>
          <div className="app__process--option">
            {object.map(element => (
              <button
                onClick={e => handleProcess(e, element)}
                className="app__process--button"
              >
                {element}
              </button>
            ))}
          </div>
        </div>

        <div className="app__body">
          <div className="app__left">
            <img
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

        <div className="app__footer">INFORMACIÓN GENERAL</div>
      </div>
    </div>
  );
}

export default App;
