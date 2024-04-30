export const limitPosition = (position: number, width: number) => {
  if (position > width) {
    return (position = width);
  } else if (position < 0) {
    return (position = 0);
  } else return position;
};
