// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array, return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.
let nums1 = [4,5,6,7,0,1,2];
let target1 = 0;

let nums = [4,5,6,7,0,1,2] ;
let target = 3;

function indexed(array, target){
    for(let i = 0; i < array.length; i++){
        if (array[i] == target){
            return i; 
        }

    }
    return -1;
}

console.log(indexed(nums, target));
console.log(indexed(nums1, target1));