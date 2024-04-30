export const findNearestValue = (value: number, range: number[]) => {
  return range.reduce((a, b) => {
    return Math.abs(b - value) < Math.abs(a - value) ? b : a;
  });
};
