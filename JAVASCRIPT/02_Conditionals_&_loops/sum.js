let myArray= [1,3,4,5,6] 


function sum(numbers) {
    let sum=0;
    for(let i=0; i< numbers.length; i++){
        sum= sum+ numbers[i] 
        // sum+=numbers[i]
    }
    return sum
   }
console.log(sum(myArray)) 
console.log(sum([5,4,3]))
