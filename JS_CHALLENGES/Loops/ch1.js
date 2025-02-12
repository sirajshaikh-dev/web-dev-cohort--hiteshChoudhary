// You have a pile of gifts, and you wantr to give each of your friends one gift at a time.
//  You kkeep giving gifts to your friends until they all get one.

// Problem Statement: Write a function to distribute gifts to your friends one by one.
// it should stop once all your friends have recieved a gift.

function distributeGifts(friends, gifts) {
    let i = 0;
    while (i < friends.length) {
        for (let j = 0; j < gifts.length; j++) {
        console.log(`${friends[i]} gets ${gifts[j]}`);
        i++;
        }
    }
    }