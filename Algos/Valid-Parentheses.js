// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracket = {
      '{':'}',
      '[':']',
      '(':')',
    }

    let array = [];

    for(let char of s) {
      if(bracket[char]){
        array.push(bracket[char])
      }else{
        if(array.pop()!== char) return false  
      }
    }

    return(!array.length)

};

// console.log(isValid('(}'))
console.log(isValid('()[]{}'))