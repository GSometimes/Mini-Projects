//Remove Exclamation Marks

// Write a function which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//     let newString = '';

    
// }

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