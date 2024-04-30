import { handleMouseUp } from '../handleMouseUp';

describe('handleMouseUp test suite', () => {
  it('should handle mouse up', () => {
    const setDragging = vi.fn();
    handleMouseUp(setDragging);
    expect(setDragging).toHaveBeenCalledWith(null);
  });
});
