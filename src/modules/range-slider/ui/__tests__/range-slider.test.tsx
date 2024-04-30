import { render, screen, fireEvent } from '@testing-library/react';
import { CustomRangeSlider } from '@/modules';

describe('CustomRangeSlider', () => {
  it('updates the range when the slider is moved', () => {
    render(<CustomRangeSlider minValue={0} maxValue={100} />);
    const slider = screen.getAllByTestId('slider');

    fireEvent.mouseDown(slider[0], { clientX: 0 });
    fireEvent.mouseMove(slider[0], { clientX: 50 });
    fireEvent.mouseUp(slider[0]);

    fireEvent.mouseDown(slider[1], { clientX: 300 });
    fireEvent.mouseMove(slider[1], { clientX: 100 });
    fireEvent.mouseUp(slider[1]);

    expect(slider[0]).toHaveStyle('left: 50px');
    expect(slider[1]).toHaveStyle('left: 100px');
  });
});
