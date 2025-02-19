// You're tracking the number of steps you take during a workout.
// Each time you take a step, you want to count it.
// You keep stepping until you've reached a certain no.of number steps.

//Problem:  Create a function that uses a loop to count the number of steps during a workout.
// The loop should countinue until you reach the target step count.

/* Using if Else */

function countSteps(targetSteps) {
    let steps = 0;
    for(let i = 0; i < targetSteps; i++) {
        steps++;
    }
    return steps;
}
console.log(countSteps(5)) // 5

/* Using while */
function countStep(targetSteps) {
    let steps=0
    while(steps<targetSteps){
        steps++
    }
    return steps
}

console.log(countStep(10)) // 10
  