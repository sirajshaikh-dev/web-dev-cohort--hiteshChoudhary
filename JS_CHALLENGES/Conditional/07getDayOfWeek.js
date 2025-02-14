/* Given a Number(1-7), return the corresponding day of the week 
Write a function that uses switch case to return the day name for valid inputs otherwise "Invalid day" */

function getDayofWeek(day) {
    switch (day) {
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        case 7: return "Sunday"
        default:
          return "Invalid day"
    }
}
console.log(getDayofWeek(1)) // Monday  