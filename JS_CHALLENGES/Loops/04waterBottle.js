// Create a function that takes an array of waterAmounts (in liters) 
// for each bottle and adds them up. 
// The function should return the total amount of water you've filled in all bottles.

function totalWater(waterAmounts) {
    let totalWater = 0;
    for (let i = 0; i < waterAmounts.length; i++) {
        totalWater += waterAmounts[i];
    } 
    return totalWater;
}


 console.log(totalWater([1,2,3,4])) 

/* Try and error code: 
function totalWater(waterAmounts) {
    const totalWater=0
    for(let i=0; i<=waterAmounts.lenth;i++){
      return totalWater+=i
    }
  } */