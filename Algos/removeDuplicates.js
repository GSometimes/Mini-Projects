
// Remove Duplicates from sorted array.

// Given a sorted array nums, remove the duplicates in-place such that
// each element appears only once and returns the new length.

let removeDuplicates = function(nums) {
    if (nums.length === 0){
        return 0
    }

    let pointer1 = 0;

    for(let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if(nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }

    return pointer1 + 1;
}

console.log(removeDuplicates([1,1,1,2,2,4,4,6,6,6]))