let numberOfGuest=2;
let pizzaSlices;    

if (numberOfGuest<=2) {
    pizzaSlices='small'
}else if (numberOfGuest<=5 ) {
    pizzaSlices="medium"
}else{
    pizzaSlices='large'
}
console.log(pizzaSlices)