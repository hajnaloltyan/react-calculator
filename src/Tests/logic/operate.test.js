import operate from '../../components/logic/operate';

describe('operate', () => {
  test('should add together correctly 2 numbers', () => {
    const testOperation = operate('5', '23', '+');
    expect(testOperation).toBe('28');
  });

  test('Subtraction two numbers case 2', () => {
    const numOne = '5';
    const numTwo = '7';
    const operation = '-';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('-2');
  });

  test('should divide together correctly 2 numbers', () => {
    const testOperation = operate('100', '5', '÷');
    expect(testOperation).toBe('20');
  });

  test('Divide two numbers case 3, divide by 0', () => {
    const numOne = '44';
    const numTwo = '0';
    const operation = '÷';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch("Can't divide by 0.");
  });

  test('should multiply together correctly 2 numbers', () => {
    const testOperation = operate('6', '8', 'x');
    expect(testOperation).toBe('48');
  });

  test('Multiplication two numbers case 2', () => {
    const numOne = '8';
    const numTwo = '-12';
    const operation = 'x';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('-96');
  });

  test('Module of two numbers', () => {
    const numOne = '4';
    const numTwo = '2';
    const operation = '%';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('0');
  });
});
