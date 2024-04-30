export const handleMouseDown = (
  e: React.MouseEvent<HTMLDivElement>,
  type: string,
  setDragging: (value: React.SetStateAction<string>) => void,
) => {
  setDragging(type);
};
