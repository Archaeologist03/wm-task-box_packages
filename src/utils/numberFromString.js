// Get a first occuring number from a string
const numberFromString = (str) => {
  const num = Number(str.replace(/\D+/g, ''));
  // either number or if there is no num then 0
  return num && !isNaN(num) ? num : 0;
};

export default numberFromString;
