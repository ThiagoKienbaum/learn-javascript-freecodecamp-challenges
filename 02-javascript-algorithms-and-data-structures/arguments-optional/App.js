function addTogether() {
  function checkNum (num){
    if(typeof num !== "number"){
      return undefined;
    }
    else {
      return num;
    }
  } 
  
  if (arguments.length > 1) {
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);
    console.log(a, b);
    
    if( a === undefined || b === undefined){
      return undefined
    }
    else{
      console.log(a + b);
      return a + b;
    }
  }

  else{
    let c = arguments[0];

    if (checkNum(c)){
      return function (arg2){
        if (c === undefined || checkNum(arg2) === undefined){
          return undefined;
        }
        else{
          return c + arg2;
        }
      }
    }
    else{
      return undefined;
    }
  }
}

addTogether(2,3);