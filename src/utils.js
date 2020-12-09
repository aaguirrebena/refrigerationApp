export const info = {
  0: {
    process: 'General',
    info:
      'Sistema de refrigeración: ciclo compuesto de arreglos mecánicos que utilizan las propiedades termodinámicas de la materia para trasladar energía térmica en forma de calor entre dos o más focos',
    data: {
      tI: '',
      tW: '',
      cop: ''
    }
  },
  1: {
    process: 1,
    info:
      'Compresor: aumenta la presión del refrigerante por medio de la compresión, provocando un aumento en la temperatura del refrigerante. El refrigerante pasa de vapor saturado a vapor sobrecalentado',
    data: {
      Status: 'Vapor saturado',
      temperature: '-20°c',
      pressure: '132.7 Kpa',
      Velocity: 'U1',
      massBalance: '',
      energyBalance: ''
    }
  },
  2: {
    process: 2,
    info:
      'Compresor: aumenta la presión del refrigerante por medio de la compresión, provocando un aumento en la temperatura del refrigerante. El refrigerante pasa de vapor saturado a vapor sobrecalentado',
    data: {
      Status: 'Vapor sobrecalentado',
      temperature: '70°c',
      pressure: '1 MPa',
      Velocity: 'U2',
      Work: '',
      massBalance: '',
      energyBalance: ''
    }
  },
  3: {
    process: 3,
    info:
      'Condensador:  provoca una entrega de calor del refrigerante hace los alrededores, cambiando su estado desde vapor sobrecalentado a líquido saturado',
    data: {
      Status: 'Vapor sobrecalentado',
      temperature: '70°c',
      pressure: '1 MPa',
      Velocity: 'U2',
      massBalance: '',
      energyBalance: ''
    }
  },
  4: {
    process: 4,
    info:
      'Condensador:  provoca una entrega de calor del refrigerante hace los alrededores, cambiando su estado desde vapor sobrecalentado a líquido saturado',
    data: {
      Status: 'Líquido Sobresaturado',
      temperature: '30°c',
      pressure: '1 MPa',
      Velocity: 'U3',
      qOut: '',
      massBalance: '',
      energyBalance: ''
    }
  },
  5: {
    process: 5,
    info:
      'Válvula de expansión: estrangula el refrigerante, provocando una disminución de su temperatura y presión. El refrigerante pasa de líquido saturado a vapor húmedo',
    data: {
      Status: 'Líquido Sobresaturado',
      temperature: '30°c',
      pressure: '1 MPa',
      Velocity: 'U3',
      massBalance: '',
      energyBalance: ''
    }
  },
  6: {
    process: 6,
    info:
      'Válvula de expansión: estrangula el refrigerante, provocando una disminución de su temperatura y presión. El refrigerante pasa de líquido saturado a vapor húmedo',
    data: {
      Status: 'Vapor Húmedo',
      temperature: '-20°c',
      pressure: '132.7 Kpa',
      Velocity: 'U4',
      massBalance: '',
      energyBalance: ''
    }
  },
  7: {
    process: 7,
    info:
      'Evaporador: Provoca absorción de calor por parte del refrigerante del sistema que se busca refrigerar, por lo que cambia su estado de vapor húmedo a vapor saturado',
    data: {
      Status: 'Vapor Húmedo',
      temperature: '-20°c',
      pressure: '132.7 Kpa',
      Velocity: 'U4',
      qIn: '',
      massBalance: '',
      energyBalance: ''
    }
  },
  8: {
    process: 8,
    info:
      'Evaporador: Provoca absorción de calor por parte del refrigerante del sistema que se busca refrigerar, por lo que cambia su estado de vapor húmedo a vapor saturado',
    data: {
      Status: 'Vapor Saturado',
      temperature: '-20°c',
      pressure: '132.7 Kpa',
      Velocity: 'U1',
      Qin: '',
      massBalance: '',
      energyBalance: ''
    }
  },
  9: { process: 'reset' }
};

export const vars = {
  'Densidad 1  ': '7.849 kg/m³',
  'Densidad 2  ': '41.15 kg/m³',
  'Densidad 3  ': '1149.42 kg/m³',
  'Densidad 4  ': '26.74 kg/m³',
  'hentalpia 1  ': '238.4 kJ/kg',
  'hentalpia 2  ': '303.9 kJ/kg',
  'hentalpia 3  ': ' 95 kJ/kg',
  'hentalpia 4  ': '78.72 kJ/kg',
  'Área Transversal': '0.000197 m^2',
  // "Área transversal 3": 0.000394,
  'Calor específico T ambiental': '1.012 kJ/kg*K',
  'Flujo másico aire fuera de Evaporador': '16 m/s'
};
