/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var key = {}
    for(let i=0;i<nums.length;i++){
        if (nums[i] in key && key[nums[i]] !== i) return [key[nums[i]],i]
        key[target-nums[i]]=i     
    }
};
