import calculate from '../../components/logic/calculate';

describe('calculate', () => {
  test('should update all object field\'s to null after using AC button', () => {
    const testObj = {
      total: '0',
      next: '24',
      operation: 'x',
    };

    const result = calculate(testObj, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should update all object field\'s to correct value after using = button', () => {
    const testObj = {
      total: '4',
      next: '15',
      operation: 'x',
    };

    const result = calculate(testObj, '=');
    expect(result).toEqual({
      total: '60',
      next: null,
      operation: null,
    });
  });

  test('When the user click 0 twice', () => {
    const obj = { total: null, next: '0', operation: null };
    const btnName = '0';
    const result = calculate(obj, btnName);
    expect(result).toEqual({});
  });

  test('When the user introduce the first number', () => {
    const obj = { total: null, next: null, operation: null };
    const btnName = '1';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '1' });
  });

  test('When the user introduce a number after get the result', () => {
    const obj = { total: '105', next: null, operation: null };
    const btnName = '9';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '9' });
  });

  test('When the user introduce a . after a previous number', () => {
    const obj = { total: null, next: '5', operation: null };
    const btnName = '.';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '5.', operation: null });
  });

  test('When the user pressed the operator +/- after had pressed once', () => {
    const obj = { total: null, next: '-7', operation: null };
    const btnName = '+/-';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '7', operation: null });
  });
});
