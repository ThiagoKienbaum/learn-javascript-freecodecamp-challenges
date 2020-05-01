var counter = 0;
const increaseCounter = [2,3,4,5,6];
const decreaseCounter = [10,'J','Q','K','A'];

function cardCounter(card) {
  if (increaseCounter.includes(card)) {
    counter++
  } else if (decreaseCounter.includes(card)) {
    counter--
  }
  
  if(counter > 0) {
    return(`${counter} Bet`);
  } else {
    return(`${counter} Hold`);
  }  
}

cardCounter(2); 
cardCounter(3); 
cardCounter(7); 
cardCounter('K'); 
cardCounter('A');