// 06.Factorial of a i
// Write a program to calculate the factorial of a i entered by the user. 
// (Factorial of 5 = 5! = 5 × 4 × 3 × 2 × 1 = 120).

let factorial= 5
let result = 1;
for(let i = 1; i <= factorial; i++) {
    result = result * i;
}
console.log('Factorial of ' + factorial + ' is: ' + result);

// second method to solve 

// for(let i=factorial; i>=1; i--){
//     result = result*i
// }
// console.log(`Factorial of ${factorial} is ${result}`)