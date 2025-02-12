// 08. determine if Number is positive, negative or zero

function checkNumber(number) {
  // Return "Positive", "Negative", or "Zero" based on the number
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(10)); // Positive
console.log(checkNumber(-10)); // Negative
console.log(checkNumber(0)); // Zero

// Using ternary operator
function checkNumber(num) {
  return num > 0 ? "Positive" 
                  : num < 0 ? " Negative" 
                            : "Zero";
}
console.log(checkNumber(4))

//When two function with same name is defined, the second function will override the first function 
