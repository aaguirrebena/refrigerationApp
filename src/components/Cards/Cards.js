import React from "react";
import './Cards.css'

function Cards({ number, info }) {
  return (
      <div className="main">
        <div className="main__title">
          Etapa { number } del proceso

        </div>
        <div className="main__info">
          { info }

        </div>
      </div>
  )
}

export default Cards;
