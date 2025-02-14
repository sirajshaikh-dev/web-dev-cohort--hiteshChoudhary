// 07. Write a program to print the Triangle pattern using nested for loops:

for(let i=1; i<=5; i++){
    // console.log("*")
    let row="1"
    for(let j=1;j<=i; j++){
        console.log(row)
        row =row + "*"
    }
    console.log(row)
}




/* Triangle Using process.stdout.write("") */

// for(let i=1; i<=3; i++){
//     // console.log('*')
//     for(let j=1; j<=i; j++){
//         // process.stdout.write("*")
//     }
//     // console.log("")
// }