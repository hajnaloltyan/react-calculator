import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../../components/Calculator/Calculator';

describe('Calculator', () => {
  test('component to be present and rendered', () => {
    const test = render(<Calculator />);
    expect(test).toMatchSnapshot();
  });

  test('component to have result showing 0', () => {
    const { getByTestId } = render(<Calculator />);
    const resultValue = Number(getByTestId('result').textContent);
    expect(resultValue).toEqual(0);
  });
});
