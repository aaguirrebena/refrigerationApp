import React from 'react';
import MathJax from 'react-mathjax2';

function Equation({ process, toShow, data }) {
  return (
    <div>
      {process === 'General' ? (
        <div>
          <div>Temperatura Inicial: {data.tI}</div>
          <div>Temperatura Deseada: {data.tW}</div>
          <div>Cop: {data.cop}</div>
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
          <div>Balance de Energía: {data.energyBalance}</div>
        </div>
      )}
    </div>
  );
}

export default Equation;
