import React, { useEffect, useState } from "react";

import "./App.css";
import { fetchData } from './api';
import Cards from "./components/Cards/Cards";
import Equation from './components/Equations/Equation';
import Result from './components/Result/Result'
import Form from './components/Form/Form'
import { info } from './utils'


function App() {

  const [process, setProcess] = useState("General");
  const [processInfo, setProcessInfo] = useState(info["0"].info);
  const [image, setImage] = useState(
    require("./assets/process_General.png").default
  );
  const [result, setResult] = useState(0);
  const [equation, setEquation] = useState(0);

  const [search, setSearch] = useState(false);
  const [inputTamb, setinputTamb] = useState(0);
  const [inputTf, setTf] = useState(0);

  function handleProcess(e, element) {
    e.preventDefault();
    if(element.process==="reset"){
      setinputTamb(0)
      setTf(0)
      setSearch(false)
      const resetProcess = info["0"].process
      const resetInfo = info["0"].info
      const image = require(`./assets/process_${resetProcess}.png`).default;
      setProcess(resetProcess);
      setProcessInfo(resetInfo);
      setImage(image);
    }
    else {
      const image = require(`./assets/process_${element.process}.png`).default;
      setProcess(element.process);
      setProcessInfo(element.info);
      setImage(image);
    }
  }

  async function handleFormM(ti, tf) {
    setinputTamb(ti)
    setTf(tf)
    await handleResult()
    setSearch(true)
  }

  async function handleResult () {

    const {equation, result} = await fetchData()
    setEquation(equation)
    setResult(result)

  };

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h1> Refrigeración líquida </h1>
        </div>

        <div className="app__select">
          <div className="app__select--title">Procesos</div>
          <div className="app__select--options">
            {Object.keys(info).map((key) => (
              <button
                onClick={e => handleProcess(e, info[key])}
                className={
                  process == info[key].process
                    ? "app__button--selected"
                    : "app__button--unselected"
                }
              >
                {info[key].process}
              </button>
            ))}
          </div>
        </div>

        <div className="app__body">
          <div className="app__left">
            <img
              className="app__image"
              onClick={e => handleProcess(e, info["0"])}
              src={image}
              alt="image"
            />
          </div>
          <div className="app__right">
            <div className="app__right--title">
              <h3>Etapa {process}</h3>
            </div>
            <div className="app__right--equations">
                {search ?
                <div>
                  <Equation toShow={equation} />
                  <Result toShow={result} />
                </div>
                :
                <div>
                  <Form handle={handleFormM}/>
                </div>

                }
            </div>
          </div>
        </div>

        <div className="app__footer">
          <Cards number={ process } info={ processInfo }/>
        </div>
      </div>
    </div>
  );
}

export default App;
