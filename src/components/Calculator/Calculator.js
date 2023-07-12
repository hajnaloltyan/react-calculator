import React, { useState } from 'react';
import './Calculator.css';
import Buttons from '../Buttons/Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  const displayResult = calculatorData.next || calculatorData.total || '0';

  return (
    <section className="calculator">
      <h2 className="result" data-testid="result">{displayResult}</h2>
      <Buttons onButtonClick={handleButtonClick} />
    </section>
  );
};

export default Calculator;
