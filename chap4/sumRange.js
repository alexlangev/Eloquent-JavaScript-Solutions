/*
Write a range function that takes two arguments, start and end, and returns an array
containing all the numbers from start up to (and including) end.
*/

const range = (start, end, step) => {
  let rangeArray = [];
  if (end > start && (step === null || step === undefined)) {
    for(let i = start; i <= end; i++){
      rangeArray.push(i);
    }
  } else if (end > start) {
    for(let i = start; i <= end; i = i + step){
      rangeArray.push(i);
    }
  } else {
    console.log('wrong input...');
  }
  return rangeArray;
}

/* 
Next, write a sum function that takes an array of numbers and returns the sum of 
these numbers. Run the example program and see whether it does indeed return 55.
*/

const sum = (array) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
  const initialValue = 0;
  return array.reduce(reducer, initialValue);
}

console.log(sum(range(0,10)));