import React, { useState } from 'react';
import CarsContext from './CarsContext';

export default function Provider({ children }) {
  const initialState = {
    red: false,
    blue: false,
    yellow: false,
  }

  const [cars, setCars] = useState(initialState);

  const moveCar = ({ target: { id } }) => {
    setCars({ ...cars, [id]: !cars[id]})
  };

  return (
    <CarsContext.Provider value={{ moveCar, cars }}>
      {children}
    </CarsContext.Provider>
  );
};
