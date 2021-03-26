console.log ('anto');
numbers = [1, 2, 3, 4, 3, 2, 1, 34, 4, 'text'];
for (const number of numbers) {
  console.log (number);
  if(typeof number == String){
    number = number.length
  }
}

