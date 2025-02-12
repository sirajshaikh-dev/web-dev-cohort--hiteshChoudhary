let myArray= [1,3,4,5,6] 


function sum(numbers) {
   for (let i = 0; i <= numbers.length; i++) { // i<=numbers.length -> 5<=5
    let sum=0;
    for(let i=0; i<= numbers.length; i++){  // writing i<= numbers.length result in NaN
        // console.log(i<numbers.length)
        sum= sum+ numbers[i] // 0+1=1, 1+3=4, 4+4=8, 8+5=13, 13+3=16, 16+2=18, 18+5=23
        // sum+=numbers[i]
    }
    return sum
   }
}

console.log(sum(myArray)) // 19
console.log(sum([5,4,3])) // 12
