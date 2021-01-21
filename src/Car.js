import React, { useContext } from 'react';
import { CarsContext } from './context';

export default function Car({ alt, img }) {
  const { moveCar, cars } = useContext(CarsContext);
  const id = alt.replace(' car', '');
  return (
    <div>
      <img
        className={cars[id] ? 'car-right' : 'car-left'}
        src={img}
        alt={alt}
      />
      <button
        onClick={ moveCar }
        id={id}
        type="button"
      >
        Move
      </button>
    </div>
  );
}
