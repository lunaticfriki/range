import { handleMouseDown } from '../handleMouseDown';

describe('handleMouseDown test suite', () => {
  it('should handle mouse down with the correct type', () => {
    const setDragging = vi.fn();
    handleMouseDown({} as React.MouseEvent<HTMLDivElement>, 'min', setDragging);
    expect(setDragging).toHaveBeenCalledWith('min');
  });
});
