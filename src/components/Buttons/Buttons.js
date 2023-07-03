import React from 'react';
import './Buttons.css';

const Buttons = () => (
  <article className="buttons">
    <button type="button" className="btn-text">AC</button>
    <button type="button" className="btn-text">+/-</button>
    <button type="button" className="btn-text">%</button>
    <button type="button" className="btn-text orange">÷</button>
    <button type="button" className="btn-text">7</button>
    <button type="button" className="btn-text">8</button>
    <button type="button" className="btn-text">9</button>
    <button type="button" className="btn-text orange">*</button>
    <button type="button" className="btn-text">4</button>
    <button type="button" className="btn-text">5</button>
    <button type="button" className="btn-text">6</button>
    <button type="button" className="btn-text orange">-</button>
    <button type="button" className="btn-text">1</button>
    <button type="button" className="btn-text">2</button>
    <button type="button" className="btn-text">3</button>
    <button type="button" className="btn-text orange">+</button>
    <button type="button" className="btn-text btn-0">0</button>
    <button type="button" className="btn-text">.</button>
    <button type="button" className="btn-text orange">=</button>
  </article>
);

export default Buttons;
