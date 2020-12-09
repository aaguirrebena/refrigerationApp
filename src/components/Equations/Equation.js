import React, { useEffect, useState } from 'react';
import './Equation.css';

function Equation({ process, toShow, data }) {
  const image = require(`../../assets/massBalance_${process}.png`).default;

  return (
    <div className="main">
      {process === 'General' ? (
        <div className="main__general">
          <div className="general__ti">Temperatura Inicial: {data.tI}</div>
          <div className="general__tf">Temperatura Deseada: {data.tW}</div>
          <div className="general__cop">Cop: {data.cop}</div>
        </div>
      ) : (
        <div>
          <div>Estado del Refrigerante: {data.Status}</div>
          <div>Temperatura: {data.temperature}</div>
          <div>Presión: {data.pressure}</div>
          <div>Velocidad del refrigerante: {data.velocity}</div>
          {process === 2 ? <div>Trabajo Neto: {data.Work}</div> : <div></div>}
          {process === 4 ? <div>Calor cedido: {data.qOut}</div> : <div></div>}
          {process === 8 ? <div>Calor Extraído: {data.qIn}</div> : <div></div>}
          <div>Balance de masa: {data.massBalance}</div>
          <div>
            <img className="mass_image" src={image} alt="mass" />
          </div>
          <div>Balance de Energía: {data.energyBalance}</div>
        </div>
      )}
    </div>
  );
}

export default Equation;
