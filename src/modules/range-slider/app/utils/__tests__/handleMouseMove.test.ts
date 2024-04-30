import { handleMouseMove } from '../handleMouseMove';

describe('handleMouseMove test suite', () => {
  const dummyProps = {
    containerRef: {
      current: {
        offsetWidth: 300,
        getBoundingClientRect: () => ({
          left: 10,
        }),
      },
    } as React.RefObject<HTMLDivElement>,

    min: 0,
    max: 100,
    setMin: vi.fn(),
    setMax: vi.fn(),
    maxValue: 100,
    range: [0, 20, 50, 100],
  };

  it('should handle mouse move and set the min if dragging the min slider', () => {
    const dragging = 'min';
    const clientX = 20;

    handleMouseMove({
      dragging,
      clientX,
      ...dummyProps,
    });
    expect(dummyProps.setMin).toHaveBeenCalledWith(0);
    expect(dummyProps.setMax).not.toHaveBeenCalled();
  });

  it('should handle mouse move and set the max if dragging the max slider', () => {
    const dragging = 'max';
    const clientX = 100;

    handleMouseMove({
      dragging,
      clientX,
      ...dummyProps,
    });
    expect(dummyProps.setMin).toHaveBeenCalledWith(0);
    expect(dummyProps.setMax).toHaveBeenCalledWith(20);
  });
});
