'use client';

import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  useRange,
  MAX,
  MIN,
  RangeContainer,
  Slider,
  Limits,
} from '@/modules';
import { useEffect, useState } from 'react';

interface CustomRangeSliderProps {
  minValue: number;
  maxValue: number;
  range?: number[];
}

export const CustomRangeSlider = ({
  minValue,
  maxValue,
  range,
}: CustomRangeSliderProps) => {
  const { containerRef, min, max, setDragging, mouseMoveProps } = useRange(
    minValue,
    maxValue,
    range,
  );

  const [finalValue, setFinalValue] = useState({
    min: minValue,
    max: maxValue,
  });

  useEffect(() => {
    if (max > maxValue) {
      setFinalValue({ min, max: maxValue });
    } else {
      setFinalValue({ min, max });
    }

    if (min < minValue) {
      setFinalValue({ min: minValue, max });
    } else {
      setFinalValue({ min, max });
    }
  }, [max, maxValue, min, minValue]);

  return (
    <>
      <Limits maxValue={maxValue} minValue={minValue} range={range} />
      <div className="range-slider-container">
        <p className="value">{finalValue.min.toFixed(2)}$</p>
        <RangeContainer
          containerRef={containerRef}
          mouseMove={(e) =>
            handleMouseMove({ clientX: e.clientX, ...mouseMoveProps })
          }
          mouseUp={() => handleMouseUp(setDragging)}
        >
          <Slider
            value={min}
            mouseDown={(e) => handleMouseDown(e, MIN, setDragging)}
            type="min"
            maxValue={maxValue}
            rangeValues={range}
          />
          <Slider
            value={max}
            mouseDown={(e) => handleMouseDown(e, MAX, setDragging)}
            type="max"
            maxValue={maxValue}
            rangeValues={range}
          />
        </RangeContainer>
        <div className="value">{finalValue.max.toFixed(2)}$</div>
      </div>
    </>
  );
};
