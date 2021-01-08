/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var key = {}
    var pari=[]
    for(let i=0;i<nums.length;i++){
        key[target-nums[i]]=i
    }
    
    for(let j=0;j<nums.length;j++){
        if (key[nums[j]] && j!==key[nums[j]]) return [j,key[nums[j]]]
    }
};
