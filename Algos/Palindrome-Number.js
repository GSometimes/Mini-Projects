// Palindrome Linked List

// Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// A Palindrome is anything that can be written the same way backwards.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let copy = x;
    let reverse = 0;

    if (x < 0) return false;

    while (copy !== 0) {
        reverse = reverse * 10 + (copy % 10);
        copy = parseInt(copy / 10);
    }
    return x === reverse;
}
  
//   console.log(isPalindrome(121));
  console.log(isPalindrome(-121));