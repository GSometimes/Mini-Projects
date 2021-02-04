// ## Fibonacci

// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.
// For example, the sequence:
// [0,1,1,2,3,5,8,13,21,34]
// forms the first ten entries of the fibonacci series.

// Remember: For 5th element we look at index 5 instead of 4, because 0 does not add any value, so we start actually from 1. 0 is there 'hardcoded' without value.


// Example:
// fib(4) === 3;


function fibonacci(n) {
    //initialize result array to produce first sum that can't be made otherwise (0+0 is always = 0()
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[result.length - 1];
        const b = result[result.length - 2];

        result.push(a + b);
    }
    return result[n];
}

console.log(fibonacci(7))

// RECURSIVE solution:

function fib(n) {
    if (n < 2) {
        // The only case when we ACTUALLY return A NUMBER
        return n;
        // Otherwise keep REINVOKING the function until it boils down to PREVIOUS solution
    } else return fib(n - 1) + fib2(n - 2);
}