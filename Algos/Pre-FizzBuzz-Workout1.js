// Pre-Fizzbuzz Workout #1

// Write a function that gets you from the input to the output
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).

// Define an empty array
// Create a loop that will increment from the value of n
// Push those values into the empty array
// Return new array


function preFizz(n) {
    let fizzed = []

    for(i = 1; i <= n; i++){
        if(i <= n){
            fizzed.push(i)
        }
    }
    return fizzed;
}

console.log(preFizz(1));
console.log(preFizz(3));
console.log(preFizz(5));