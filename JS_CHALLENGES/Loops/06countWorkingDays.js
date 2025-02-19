// Create a function that takes an array of days ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] and return the number of days you're working.
// Saturday and Sunday are not considered workdays.

/* Using If Else */
function countWorkingDays(days) {
    let count = 0;
    for (let i = 0; i < days.length; i++) {
        if (days[i] !== "Saturday" && days[i] !== "Sunday") {
            count++;
        }
    }
    return count;
}
console.log(countWorkingDays(["Monday","Tuesday","Friday"])) //3
console.log(countWorkingDays(["Monday","Tuesday","Friday","Saturday"])) //3

/* Using filter */
const days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function countWorkingDay(days) {
   const workingDays= days.filter((day)=> day!=="Saturday" && day!=="Sunday")
   return workingDays.length
}
console.log(countWorkingDay(days))


/* TRY AND ERROR : 
const days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function countWorkingDay(days) {
    const count = days.filter((day) => day !== "Saturday" && day !== "Sunday").length;
    return count;
}
console.log(countWorkingDay(days))
 */
// function countWorkingDays(days) {
//     const workingDays = days.filter(day => day !== "Saturday" && day !== "Sunday");
//     return workingDays.length;
// }

// console.log(countWorkingDays(["Monday", "Wednesday", "Thursday"])); // 3
// console.log(countWorkingDays(["Monday", "Wednesday", "Saturday"])); // 2
// console.log(countWorkingDays(["Sunday", "Saturday", "Friday"])); // 1