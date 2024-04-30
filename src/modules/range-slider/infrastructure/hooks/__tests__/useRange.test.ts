import { renderHook } from '@testing-library/react';
import { useRange } from '../useRange';

describe('useRange test suite', () => {
  it('should return the states and mouseMoveProps', () => {
    const { result } = renderHook(() => useRange(0, 100, [0, 25, 50, 100]));

    expect(result.current.min).toBe(0);
    expect(result.current.max).toBe(100);
    expect(result.current.mouseMoveProps.range).toMatchObject([0, 25, 50, 100]);
  });
});
