// You're shopping for groceries and want to know the total cost of all the items in your cart.
// You have an array of item prices. 
// Create a function that takes an array of numbers and returns the total cost.

const prices=[5,10,15,12.5]

function totalPrice(prices) {
   let totalPrice=0
    for(let i=0;i<prices.length;i++){
        totalPrice+=prices[i]
    }
   return totalPrice
}
console.log(totalPrice(prices)) //42.5





const totalCost= prices.reduce((acc,currVal)=>acc+currVal,0)
console.log(totalCost)  //42.5
