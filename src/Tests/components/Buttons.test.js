// import react-testing methods
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
// the component to test
import calculate from '../../components/logic/calculate';
import Buttons from '../../components/Buttons/Buttons';

let calculatorData = {
  total: null,
  next: null,
  operation: null,
};
const handleButtonClick = (buttonName) => {
  const newCalculatorData = calculate(calculatorData, buttonName);
  calculatorData = newCalculatorData;
};

describe('Testing the Buttons component', () => {
  test('Test if the button component render correctly', () => {
    const tree = renderer.create(<Buttons onButtonClick={handleButtonClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Check if the AC button exist', () => {
    render(<Buttons onButtonClick={handleButtonClick} />);
    const ButtonsContainer = screen.getByText('AC');
    expect(ButtonsContainer).toHaveTextContent('AC');
  });

  test('Check if the % button exist', () => {
    render(<Buttons onButtonClick={handleButtonClick} />);
    const ButtonsContainer = screen.getByText('%');
    expect(ButtonsContainer).toHaveTextContent('%');
  });
});
