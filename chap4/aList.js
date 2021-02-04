
//A list or sequence in programming is a data type the represents a 
//countable number of ordered values.

let testArray = [1,2,3,4,5];

const arrayToList = (array) => {
  let result = {};
  let restObject = null;

  for(let i = array.length - 1; i >= 0; i--){
    result = {
      value: array[i],
      rest: restObject,
    }
    restObject = result;
  }
  return result;
}

const listToArray = (list) => {
  let result = [];
  if(list.value !== undefined || list.value !== null){
    for(let node = list; node; node = node.rest){
      result.push(node.value);
    }
  }
  return result;
}

const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  }
}

const nth = (list, num) => {
  if(list.value !== undefined || list.value !== null){
    let counter = num;
    let tempValue = list.value;
    let tempRest = list.rest;

    while(counter > 0) {
      counter--;
      tempValue = tempRest.value;
      tempRest = tempRest.rest;
    } 
    return tempValue;
  }
}

console.log(nth(arrayToList(testArray), 4))