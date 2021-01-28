const countChar = (string, char) => {
  let counter = 0;
  for(let i = 0; i <= string.length -1; i++){
    if(string[i] === char){
      counter += 1;
    }
  }
  return counter;
}

console.log(countChar('hello my name is Alex', 'e'));