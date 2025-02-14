

// function filterHealty(foodList) {
//     return foodList.filter((item)=>(!item.includes('burger')))
    
// }


function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    return foodList.filter((item)=>(!item.includes("buger")))
    //  return foodList.filter(item => !item.includes("Burger"));
}

console.log(filterHealthy(["salad","burger","apple","pizza"]))