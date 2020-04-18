function frankenSplice(arr1, arr2, n) {
  
  let newArr = arr2.slice();

  for (let i = 0; i < arr1.length; i++){
    newArr.splice(n, 0, arr1[i]);
    n++;
  }
  console.log(newArr);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);