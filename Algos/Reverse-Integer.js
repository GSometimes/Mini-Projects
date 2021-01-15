// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

//Create a function that loops through input values and takes the last value and pushes it to the beginning.


let reverse = function(x) {
    let reverse = 0;
    while(x !== 0) {
        reverse = reverse * 10 + (x % 10);
        x = parseInt(x / 10);
    }
    return reverse > Math.pow(2,31) || reverse < Math.pow(-2,31)? 0 : reverse;
}


// console.log(reverse(123));
console.log(reverse(120));