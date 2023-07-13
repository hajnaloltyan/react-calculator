import operate from '../../components/logic/operate';

describe('Operate logic related to + operator', () => {
  test('should add together correctly 2 numbers', () => {
    const testOperation = operate('5', '23', '+');
    expect(testOperation).toBe('28');
  });
  test('Sum two numbers case 2', () => {
    const numOne = '675';
    const numTwo = '66';
    const operation = '+';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('741');
  });
});

describe('Operate logic related to - operator', () => {
  test('Subtraction two numbers case 2', () => {
    const numOne = '5';
    const numTwo = '7';
    const operation = '-';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('-2');
  });
  test('Subtraction two numbers case 2', () => {
    const numOne = '900';
    const numTwo = '66';
    const operation = '-';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('834');
  });
});

describe('Operate logic related to x operator', () => {
  test('should multiply together correctly 2 numbers', () => {
    const testOperation = operate('6', '8', 'x');
    expect(testOperation).toBe('48');
  });
  test('Multiplication two numbers case 2, one negative number', () => {
    const numOne = '8';
    const numTwo = '-12';
    const operation = 'x';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('-96');
  });
});

describe('Operate logic related to ÷ operator', () => {
  test('should divide together correctly 2 numbers', () => {
    const testOperation = operate('100', '5', '÷');
    expect(testOperation).toBe('20');
  });
  test('Divide two numbers case 2', () => {
    const testOperation = operate('44', '-22', '÷');
    expect(testOperation).toBe('-2');
  });
  test("Divide two numbers case 3, can't divide by 0", () => {
    const numOne = '44';
    const numTwo = '0';
    const operation = '÷';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch("Can't divide by 0.");
  });
});

describe('Operate logic related to % operator', () => {
  test('Module of two numbers', () => {
    const numOne = '4';
    const numTwo = '2';
    const operation = '%';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('0');
  });
  test('Module two numbers case 3, divide by 0', () => {
    const testOperation = operate('44', '0', '%');
    expect(testOperation).toMatch("Can't find modulo as can't divide by 0.");
  });
});

describe('Operate logic related to unknown operator', () => {
  test('When the user press and unknown operator case 1', () => {
    expect(() => operate('44', '0', '?')).toThrow("Unknown operation '?'");
  });
  test('When the user press and unknown operator case 2', () => {
    expect(() => operate('44', '0', '!')).toThrow("Unknown operation '!'");
  });
});
