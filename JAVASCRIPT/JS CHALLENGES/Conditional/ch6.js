/* You need to determine what action to take based on taraffic light colors:
"Red" -> Stop
"Yellow" -> Slow Down
"Green" -> Go
"Blue" -> Invalid color

Use switch case function
You just need to implement the trafficLightAction function
*/

/* Steps to remember :
1. write all cases in smallCase so the input can be any case and it will be converted to small case
2. use .toLowerCase() to convert the input to small case
*/
function trafficLightAction(color) {
  switch (color.toLowerCase()) {
    case 'red' : return "Stop"
    case 'yellow' : return "Slow Down"
    case 'green' : return "Go"
    case 'blue' : return "Invalid Color"
    default : return "Invalid Color" 
  }
}

console.log(trafficLightAction('Red')) //Stop
console.log(trafficLightAction('red')) //Stop
console.log(trafficLightAction('rEd')) //Stop
console.log(trafficLightAction('Blue')) //Invalid Color
console.log(trafficLightAction('Green')) //Go
console.log(trafficLightAction('Grey')) //Invalid Color
























// Using if else
// function trafficLightAction(color) {
//     // Return "Stop", "Slow Down", or "Go" based on the traffic light color
//     if(color =='Red'){
//       return 'Stop'
//     }else if(color =='Yellow'){
//       return 'Slow Down'
//     }
//     else if(color =='Green'){
//       return 'Go'
//     }else{
//       return 'Invalid Color'
//     }
//   }

//   console.log(trafficLightAction('Red')) 
//   console.log(trafficLightAction('Yellow')) 
//   console.log(trafficLightAction('Green')) 
//   console.log(trafficLightAction('Grey')) 