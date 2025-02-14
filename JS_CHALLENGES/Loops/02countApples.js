// 02. You have a basket full of apples. You need to count how many apples are int he basket,
// but you don't know the exact number. Each time you pick an apple, you count one. Your task is to count how many 
// apples are in the basket.
// Problem Statement: Create a function that counts the number of apples in the basket Using loop.

function countApples(apples) {
    let count =0
    for (let i = 0; i < apples; i++) {
        count ++    
    }
    return count
}

console.log(countApples(5))


/* Similar type of question */

function countSteps(targetSteps) {
        let steps = 0
        while(steps < targetSteps){
            steps++
        }
        return steps
    }
console.log(countSteps(10)) //10

