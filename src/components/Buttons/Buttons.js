import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const Buttons = ({ onButtonClick }) => {
  const handleClick = (buttonName) => {
    onButtonClick(buttonName);
  };

  const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const renderButton = (buttonName, index) => {
    let classNames = 'btn-text';
    if ((index + 1) % 4 === 0 || index === 18) {
      classNames += ' orange';
    } else if (index === 16) {
      classNames += ' btn-0';
    }

    return (
      <button
        key={buttonName}
        className={classNames}
        onClick={() => handleClick(buttonName)}
        type="button"
      >
        {buttonName}
      </button>
    );
  };

  return (
    <article className="buttons">
      {buttonNames.map(renderButton)}
    </article>
  );
};

Buttons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Buttons;
