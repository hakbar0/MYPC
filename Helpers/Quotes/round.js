export const round = (value) => {
  return parseFloat(Number(Math.round(value + "e" + 2) + "e-" + 2).toFixed(2));
};
