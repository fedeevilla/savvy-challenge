export const formatCardNumber = (number) => {
  let numbers = number.split("") || [];
  let res = [];
  for (let i = 0; i < numbers.length; i += 4) {
    res.push(number.slice(i, i + 4));
  }
  return res.join(" ");
};
