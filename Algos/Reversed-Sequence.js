// Reversed Sequence

// Build a function that returns an array of integers from n to 1 where n > 0.

// Define empty array
// Create a loop that will decrement from the value of n
// Push those values into the empty array
// Return new array

const reverseSeq = n => {
    let reversed = []

    for(i = n; i > 0; i--){
        reversed.push(i)
    }

    return reversed
}

console.log(reverseSeq(10))