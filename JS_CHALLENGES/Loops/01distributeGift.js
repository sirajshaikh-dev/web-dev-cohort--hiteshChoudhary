// You have a pile of gifts, and you want to give each of your friends one gift at a time.
//  You kkeep giving gifts to your friends until they all get one.

// Problem Statement: Write a function to distribute gifts to your friends one by one.
// it should stop once all your friends have recieved a gift.

function distributeGifts(totalGifts, friends) {
    // write your code here
    let giftsGiven= 0;
    for(let i=0; i<friends; i++){
      if(totalGifts>0){
      giftsGiven ++
      totalGifts--
      }
    }
    return giftsGiven
  }
console.log(distributeGifts(20,4))