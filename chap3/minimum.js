const min = (a, b) => {
  if(a < b){
    return a;
  } else if (a > b){
    return b;
  } else if( a ===b){
    return a;
  } else {
    return undefined;
  }
}

console.log(min(3,'ok'));