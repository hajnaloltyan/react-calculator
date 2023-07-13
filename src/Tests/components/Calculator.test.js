import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../../components/Calculator/Calculator';

describe('Calculator', () => {
  test('component to be present and rendered', () => {
    const test = render(<Calculator />);
    expect(test).toMatchSnapshot();
  });

  test('Simulate user iteractions case 1', () => {
    // Render a React element into the DOM
    render(<Calculator />);

    userEvent.click(screen.getByText('7'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('='));
    userEvent.click(screen.getByText('x'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('='));
    userEvent.click(screen.getByText('='));

    expect(screen.getByTitle('result')).toHaveTextContent('0');
  });

  test('Simulate user iteractions case 2', () => {
    // Render a React element into the DOM
    render(<Calculator />);

    userEvent.click(screen.getByText('7'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('='));

    // assert that the alert message is correct using
    // toHaveTextContent, a custom matcher from jest-dom.
    expect(screen.getByTitle('result')).toHaveTextContent('15');
  });

  test('component to have result showing 0', () => {
    const { getByTestId } = render(<Calculator />);
    const resultValue = Number(getByTestId('result').textContent);
    expect(resultValue).toEqual(0);
  });
});
