/*
Take in array and return another arrays with the reversed order
Don't use the reverse function.
*/

let testArray1 = ['A', 'B', 'C', 'D', 'E'];
let testArray2 = ['A', 'B', 'C', 'D'];

const reverseArr = (arr) => {
  let tempArr = []
  for(let i = arr.length - 1; i>=0; i--){
    tempArr.push(arr[i]);
  }
  return tempArr;
}

// console.log(reverseArr(testArray1));

const reverseInPlace = (arr) => {
  let counter = 0;
  if(arr.length % 2 === 0) {
    for(let i = arr.length - 1; i >= (arr.length / 2); i--){
      let temp = arr[counter];
      arr[counter] = arr[i];
      arr[i] = temp;
      counter++;
    }
  } else {
    for(let i = arr.length - 1; i >= Math.ceil(arr.length / 2); i--){
      let temp = arr[counter];
      arr[counter] = arr[i];
      arr[i] = temp;
      counter++;
    }
  }
}

reverseInPlace(testArray1);
console.log(testArray1);
reverseInPlace(testArray2);
console.log(testArray2);