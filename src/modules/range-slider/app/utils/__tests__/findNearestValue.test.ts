import { findNearestValue } from '../findNearestValue';

describe('findNearestValue test suite', () => {
  it('should return the nearest value', () => {
    const value = 4;
    const range = [1, 3, 5, 7, 9];
    const result = findNearestValue(value, range);
    expect(result).toBe(3);
  });
});
