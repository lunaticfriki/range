import { render, screen } from '@testing-library/react';
import { Limits } from '@/modules';

describe('limits test suite', () => {
  it('should render the limits without range', () => {
    const propsWithoutRange = {
      minValue: 0,
      maxValue: 500,
    };

    render(<Limits {...propsWithoutRange} />);
    const min = screen.getByTestId('min-limit');
    const max = screen.getByTestId('max-limit');
    const range = screen.queryByTestId('range');

    expect(min).toHaveTextContent('Min limit: 0');
    expect(max).toHaveTextContent('Max limit: 500');
    expect(range).not.toBeInTheDocument();
  });

  it('should render the  range', () => {
    const propsWithRange = {
      minValue: 0,
      maxValue: 500,
      range: [0, 25, 50, 100],
    };

    render(<Limits {...propsWithRange} />);

    const range = screen.queryByTestId('range');

    expect(range).toHaveTextContent(propsWithRange.range.join(', '));
  });
});
