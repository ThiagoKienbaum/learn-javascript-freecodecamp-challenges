function sumPrimes(num) {
  var result = 0
  for(let i = 2; i <= num; i++) {    
    var count = 0
    for(let j = 2; j <= i; j++) {
      if(i % j == 0) {
        count++
      }
    }
    if(count == 1) {
      result += i
    }
  }
  console.log(result)
  return result;
}

sumPrimes(10);