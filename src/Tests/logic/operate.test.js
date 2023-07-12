import operate from '../../components/logic/operate';

describe('operate', () => {
  test('should add together correctly 2 numbers', () => {
    const testOperation = operate('5', '23', '+');
    expect(testOperation).toBe('28');
  });

  test('should divide together correctly 2 numbers', () => {
    const testOperation = operate('100', '5', '÷');
    expect(testOperation).toBe('20');
  });

  test('should multiply together correctly 2 numbers', () => {
    const testOperation = operate('6', '8', 'x');
    expect(testOperation).toBe('48');
  });
});
