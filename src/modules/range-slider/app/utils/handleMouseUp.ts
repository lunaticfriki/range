export const handleMouseUp = (
  setDragging: (value: React.SetStateAction<string>) => void,
) => {
  setDragging(null);
};
