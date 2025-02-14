// You have a jar full of candies, but your little sibling keeps eating the last one! Your job is to remove the last candy from the jar.
// Create a function that removes the last candy from the jar and returns the updated jar.

function eatCandy(candyJar) {
    candyJar.pop();
    return candyJar
}
console.log(eatCandy(['choco','vanilla','sweet'])) 