// 03. Sum of Numbers
// Write a program to calculate the sum of numbers from 1 to 100 using a for loop.

let sum =0; ////should declare it outside bcoz, declaring inside will always reset sum=0
for(let i=0; i<=100 ; i++){
    sum += i
    // console.log(sum)  //will  print the sum at each iteration instead of just the final sum.
}
console.log(sum)