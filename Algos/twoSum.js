//Two Sum

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//loop through values of array
//set params to make sure you don't loop over same value twice
//check if each element of the array adds up to the target
//once you find the two elements that add up to the target return the index of each element.

const twoSum = (arr, target) => {
    let result = [];

    for(let i= 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));