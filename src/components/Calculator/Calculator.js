import React from 'react';
import './Calculator.css';
import Buttons from '../Buttons/Buttons';
import calculate from '../logic/calculate';

const Calculator = () => (
  <section className="calculator">
    <h2 className="result">0</h2>
    <Buttons />
  </section>
);

export default Calculator;
