import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from '@/modules';

describe('Slider', () => {
  it('should render with the correct value', () => {
    const value = 50;
    const mouseDown = vi.fn();
    const type = 'horizontal';
    const maxValue = 100;
    const rangeValues = [0, 25, 50, 75, 100];

    render(
      <Slider
        value={value}
        mouseDown={mouseDown}
        type={type}
        maxValue={maxValue}
        rangeValues={rangeValues}
      />,
    );

    const slider = screen.getByTestId('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('data-value', '50');
  });

  it('should call mouseDown handler when clicked', () => {
    const value = 50;
    const mouseDown = vi.fn();
    const type = 'horizontal';
    const maxValue = 100;
    const rangeValues = [0, 25, 50, 75, 100];

    render(
      <Slider
        value={value}
        mouseDown={mouseDown}
        type={type}
        maxValue={maxValue}
        rangeValues={rangeValues}
      />,
    );

    const slider = screen.getByTestId('slider');

    fireEvent.mouseDown(slider);

    expect(mouseDown).toHaveBeenCalledTimes(1);
    expect(mouseDown).toHaveBeenCalledWith(expect.any(Object), 'horizontal');
  });
});
