// You are organizing a party and have list of invited guests.
// But just before the party starts, a new friend decide to join. 
// You need to add them to guest
// Problem: Create a function that adds a new guestList and returs the updatedList

function addGuest(guestList,newGuest) {
   return guestList.push(newGuest)
    // return guestList
}

console.log(addGuest(["anirud", "mukul"],["radhika"]))

// guestList= ["anirud", "mukul"]
// newGuest = "radhika"