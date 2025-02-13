
// 04: Multiplication Table
// Write a program to print the multiplication table of a number entered by the user 
// (e.g., 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50).

let tableNumber=5;
for(let number=1; number<=10; number++){
    console.log(tableNumber*number)
    console.log(`${tableNumber} X ${number} = ${tableNumber*number}`)
}




/* // Avoid this logic
let tableNumber= 5;
for(let i=5 ; i<=50 ;i=i+5){
    console.log(i)
    console.log(tableNumber)
} */