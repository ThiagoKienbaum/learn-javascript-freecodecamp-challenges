function bubbleSort(array) {
  let swap;
  let lastValue = array.length -1;
  do {
    swap = false;
    for(let i = 0; i < lastValue; i++) {
      if(array[i] > array[i+1]) {
        [array[i], array[i+1]] = [array[i+1], array[i]];
        swap = true;
        console.log(array);
      }
    }
    lastValue--;
  } while(swap)
  return array;  
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);