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
});
