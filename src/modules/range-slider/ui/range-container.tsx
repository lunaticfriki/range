interface Props {
  containerRef: React.MutableRefObject<HTMLDivElement>;
  mouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  mouseUp: () => void;
  children: React.ReactNode;
}

export const RangeContainer = ({
  containerRef,
  mouseMove,
  mouseUp,
  children,
}: Props) => {
  return (
    <div
      ref={containerRef}
      className="h-[50px] w-[300px]"
      onMouseMove={(e) => mouseMove(e)}
      onMouseUp={mouseUp}
      onMouseLeave={mouseUp}
    >
      <div className="range-container">{children}</div>
    </div>
  );
};
