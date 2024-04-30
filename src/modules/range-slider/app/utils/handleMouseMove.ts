import { FIXED_WIDTH, MAX, MIN, findNearestValue } from '@/modules';

interface Props {
  dragging: string;
  containerRef: React.RefObject<HTMLDivElement>;
  clientX: number;
  min: number;
  max: number;
  setMin: (value: React.SetStateAction<number>) => void;
  setMax: (value: React.SetStateAction<number>) => void;
  maxValue: number;
  range?: number[];
}

export const handleMouseMove = ({
  dragging,
  containerRef,
  clientX,
  min,
  max,
  setMin,
  setMax,
  maxValue,
  range,
}: Props) => {
  if (dragging !== null && containerRef.current) {
    const containerWidth = FIXED_WIDTH;
    const ratio = containerWidth / maxValue;

    const mousePosition =
      clientX - containerRef.current.getBoundingClientRect().left;

    const newSliderPosition = mousePosition / ratio;

    if (range) {
      const nearestValue = findNearestValue(newSliderPosition, range);

      if (dragging === MIN) {
        if (nearestValue < max - 1) {
          setMin(nearestValue);
        }
      } else if (dragging === MAX) {
        if (nearestValue > min + 1) {
          if (nearestValue > maxValue) {
            setMax(maxValue);
          } else {
            setMax(nearestValue);
          }
        }
      }
    } else {
      if (dragging === MIN) {
        if (newSliderPosition < max - 1) {
          setMin(newSliderPosition);
        }
      } else if (dragging === MAX) {
        if (newSliderPosition > min + 1) {
          if (newSliderPosition > maxValue) {
            setMax(maxValue);
          } else {
            setMax(newSliderPosition);
          }
        }
      }
    }
  }
};
