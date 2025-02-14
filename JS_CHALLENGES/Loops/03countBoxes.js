// You're packing chocolate bars into gift boxes. Each box can hold a maximum of 5 chocolate bars. 
// Each box needs to have the same number of chocolate bars.
// You need to find out how many boxes of chocolates you'll have after packing the bars.

// Problem Statement: Create a function that counts how many boxes you need based on the total 
// number of chocolate bars and the number of chocolate bars per box, using  a loop.

function countBoxes(totalBars , barsPerBox) {
    // write your code here
    let boxes = 0
    if(totalBars % barsPerBox === 0){
        boxes = totalBars / barsPerBox
    } 
}