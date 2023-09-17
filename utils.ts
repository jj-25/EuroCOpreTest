/** 判斷 number 是否符合 min <= number <= max  */
const isInRange = (number: number, min: number, max: number) => {
  return number >= min && number <= max;
};

export { isInRange };
