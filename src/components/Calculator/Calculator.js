import './Calculator.css';

import React from 'react';

const Calculator = () => (
  <section className="calculator">
    <h2 className="result">0</h2>
    <button type="button" className="Btn-text">AC</button>
    <button type="button" className="Btn-text">+/-</button>
    <button type="button" className="Btn-text">%</button>
    <button type="button" className="Btn-text">/</button>
    <button type="button" className="Btn-text">7</button>
    <button type="button" className="Btn-text">8</button>
    <button type="button" className="Btn-text">9</button>
    <button type="button" className="Btn-text">*</button>
    <button type="button" className="Btn-text">4</button>
    <button type="button" className="Btn-text">5</button>
    <button type="button" className="Btn-text">6</button>
    <button type="button" className="Btn-text">-</button>
    <button type="button" className="Btn-text">1</button>
    <button type="button" className="Btn-text">2</button>
    <button type="button" className="Btn-text">3</button>
    <button type="button" className="Btn-text">+</button>
    <button type="button" className="Btn-text">0</button>
    <button type="button" className="Btn-text">.</button>
    <button type="button" className="Btn-text">=</button>
  </section>
);

export default Calculator;
