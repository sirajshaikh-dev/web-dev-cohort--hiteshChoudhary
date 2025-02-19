//You have multiple level of stars to count. Each level contains a number of stars.
//How many stars are there in total?

// Problem: Create a function that takes an array of arras(representing the number of stars in each level) and return the total number of stars.

starLevels=[["*","*","*",],["*","*"],["*"]]

/* Using for loop */
function totalStars(starLevels) { 
    let count = 0;
    for (let i = 0; i < starLevels.length; i++) {
      count += starLevels[i].length;
    }
    return count;
  }
    // console.log(totalStars(starLevels)) // 6


/* Using flat method */
console.log(`Flat stars: ${starLevels.flat()}`); // Flat stars: *,*,*,*,*,*
function totalStar(starLevels){
  const stars = starLevels.flat(); 
  return stars.length;
}

/* Using forEach */     
function totalStars(starLevels) {
    let count = 0;
    starLevels.forEach((level) => {
        count += level.length;
    });
    return count;
}

/* Using reduce */
function totalStars(starLevels) {
  return starLevels.reduce((acc, level) => acc + level.length, 0);
}


/* Try and Erro4:
/* 1. I tried to use map method to get the length of the array but it didn't work.
function totalStars(starLevels){
  const stars= starLevels.map((star)=>star)
    return stars.length
} */

/* 2. I tried to use for loop to get the length of the array but it didn't work.
function totalStars(starLevels) {
  
    for(let i=0 ; i<starLevels.length;i++){
        for(let j=0; j<i; j++){
          return starLevels.length
        }
    }
  }  */

 
