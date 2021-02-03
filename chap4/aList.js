
//A list or sequence in programming is a data type the represents a 
//countable number of ordered values.

const { type } = require("os");

let testArray = [1, 2, 3]

const arrayToList = (arr) => {
  let list = {};
  let tempObject = null;

  for(let i = arr.length - 1; i >= 0; i--){
    list = {
      value: testArray[i],
      rest: tempObject,
    }
    tempObject = list;
  }
  return tempObject;
}

// console.log(arrayToList(testArray));

const listToArray = (list) => {
  let result = [];

  if( list.rest === undefined || typeof list === undefined || list.value === undefined ){
    return result;
  } else {
    for (let node = list; node; node = node.rest){
      if(node.hasOwnProperty('value')){
        result.push(node.value);
      }
    }
  }
  return result;
}

console.log(listToArray(arrayToList(testArray)));

/*
function listToArrayWithHints(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    for (let node = list; node; node = node.rest) {
      if (node.hasOwnProperty('value')) {
        result.push(node.value);
      }
    }
  }
  return result;
}
*/