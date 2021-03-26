const numbers = [1,45,6,14,23,72,3,18]

function sortedFunction(a,b)
{
  return a - b ;
}

const sortedNumbers = numbers.sort(sortedFunction)

console.log(sortedNumbers)
