// Remove Elements

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with 0(1) extra memory.
// The order of elements can be changed .It doesn't matter what you leave beyond the new length.


let removeElement = function(nums, val) {
    let pointer1 = 0;

    for(let pointer2 = 0; pointer2 < nums.length; pointer2++) {
        if (nums[pointer2] !== val) {
            nums[pointer1] = nums[pointer2];
            pointer1++;
        }
    }

    return pointer1++;
}

console.log(removeElement([3,2,2,3], val = 3))