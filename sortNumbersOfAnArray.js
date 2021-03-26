const numbers = [1, 45, 6, 14, 23, 72, 3, 18];

const sortedNumbers = numbers.sort(function (a, b) {
  return a - b;
});

console.log(sortedNumbers);
