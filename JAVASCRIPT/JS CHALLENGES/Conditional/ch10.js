// Create basis calculator that perfoms +, -, *, /, % operations    
// Problem: Write a function that uses switch case to perform arithmatic operations. 
// Handle edge cases like divide by zero.

function calculator(num1, num2, operator) {
    // Perform arithmatic operations based on the operator
    switch(operator){
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 === 0 ? "error" : num1 / num2;
      case "/":  return num2!==0 ? num1/num2 : "Error";
      case '%': return num1 % num2;
      default : return "Invalid operator"
    }
  }

  console.log(calculator(10, 0, "/") ) // Divide by zero error

  // You just need to implement the checkEvenOdd function

function checkEvenOdd(num) {
  if (num%2==0){
    return "even"
  }else {
    return "odd"
  }
}
// checkEvenOdd(4)
  console.log(checkEvenOdd(4))