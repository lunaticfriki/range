import { limitPosition } from '../';

describe('limitPosition test suite', () => {
  it("should return the position if it's less than the width", () => {
    const position = 10;
    const width = 20;
    const result = limitPosition(position, width);
    expect(result).toBe(10);
  });

  it('should return the width if the position is greater than the width', () => {
    const position = 30;
    const width = 20;
    const result = limitPosition(position, width);
    expect(result).toBe(20);
  });

  it('should return 0 if the position is less than 0', () => {
    const position = -10;
    const width = 20;
    const result = limitPosition(position, width);
    expect(result).toBe(0);
  });
});
