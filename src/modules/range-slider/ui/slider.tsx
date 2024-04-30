import { FIXED_WIDTH, findNearestValue, limitPosition } from '@/modules';

interface Props {
  value: number;
  mouseDown: (e: React.MouseEvent<HTMLDivElement>, type: string) => void;
  type: string;
  maxValue: number;
  rangeValues?: number[];
}

export const Slider = ({
  value,
  mouseDown,
  type,
  maxValue,
  rangeValues,
}: Props) => {
  const ratio = FIXED_WIDTH / maxValue;
  let leftPosition = value * ratio;

  if (rangeValues) {
    const nearestValue = findNearestValue(value, rangeValues);

    leftPosition = nearestValue * ratio;
  }

  return (
    <div
      className="slider"
      data-testid="slider"
      style={{ left: limitPosition(leftPosition, FIXED_WIDTH) }}
      onMouseDown={(e) => mouseDown(e, type)}
      data-value={value}
    />
  );
};
