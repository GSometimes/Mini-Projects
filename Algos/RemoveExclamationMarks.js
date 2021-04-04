//Remove Exclamation Marks

// Write a function which removes all exclamation marks from a given string.

// Define empty string
// Create a for loop to iterate through string
// If the index of the string doesn't equal an "!" then push that value to newString
// Return newString


function removeExclamationMarks(s) {
    let newString = ''

    for(let i = 0; i < s.length; i++){
        if(s[i] != '!'){
            newString = newString + s[i]
        }
    }
    return newString
}

console.log(removeExclamationMarks("Hello World!"))