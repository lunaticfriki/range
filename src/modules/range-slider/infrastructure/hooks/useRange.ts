'use client';

import { useState, useRef } from 'react';

export const useRange = (
  minValue: number,
  maxValue: number,
  range?: number[],
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [min, setMin] = useState<number>(minValue);
  const [max, setMax] = useState<number>(maxValue);
  const [dragging, setDragging] = useState<string | null>(null);

  const mouseMoveProps = {
    dragging,
    containerRef,
    setMin,
    setMax,
    min,
    max,
    maxValue,
    range,
  };

  return {
    containerRef,
    min,
    max,
    dragging,
    setMin,
    setMax,
    setDragging,
    mouseMoveProps,
  };
};
