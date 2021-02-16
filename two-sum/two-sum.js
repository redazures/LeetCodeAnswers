/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let val = {}
    for(let i=0;i<nums.length;i++){
        const difference = target - nums[i]
        if(difference in val){
            return [val[difference],i]
        } else {
            val[nums[i]]=i
        }
        // console.log(val[nums[i]],val,val[difference])
    }
    return [1,2]
};