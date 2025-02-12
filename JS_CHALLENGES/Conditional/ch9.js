// Given a temperature and a scale ("C" OR "F"), convert it to other scale
// Problem: Write a function that uses switch case to convert temperature
// °C to °F -> (0°C × 9/5) + 32 = 32°F
// °F to °C -> (32°F − 32) × 5/9 = 0°C

function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    switch(scale.toLowerCase()){
      case 'c': return `${(value * 9/5) + 32}°F` ;
      case 'f' : return `${(value - 32) * 5/9 }°C ` 
      default : return "Invalid"
    }
  }

console.log(convertTemperature(25,"c")) 
console.log(convertTemperature(25,"C")) 