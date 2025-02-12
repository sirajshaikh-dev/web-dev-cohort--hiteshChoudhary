
// 01:
const teas ={
    name: 'Lemon tea',
    type: 'Green ',
    caffine: 'low'
}
// 02
console.log(teas.name)
console.log(teas.type)
console.log(teas['type'])


// 03
teas.origin= 'Assam'
// 04
teas.caffine= 'Medium'
// 05remove tea type property form the object
delete teas.type
// 06 check if the object has a property
console.log('origin' in teas)
hasownproperty('origin')
// 07 Use for..in loop to print all the properties of the object 
for(let key in teas){
    console.log(key + ':' + teas[key])
}   

// 08 Create a nested object represeting different types of teas and their properties
const myTeas={
    greenTea: {
        name: 'Green tea',
    },
    blackTea: {
        name: 'Black tea',
    },
}

// 09  create copy of the object
const teaCopy={...myTeas}
console.log(teaCopy)