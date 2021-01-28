const isEven = (num) => {
  console.log(num);
  if(num < 0){
    return('negative number!')
  } else if(num === 0){
    return true
  } else if(num === 1){
    return false
  } else {
    return isEven(num - 2)
  }
}

console.log(isEven(75));