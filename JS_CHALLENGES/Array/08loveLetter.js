// You wrote a love letter, but you want to insert your partner's name at the beginning of the message.
// Create a function that inserts the partner's name at the start of the message and returns the updated message.

function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array
    message.unshift(name)
    return message
}

console.log(writeLoveLetter(["i love you "], "HK"));

