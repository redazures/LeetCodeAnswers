/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0, highest = Number.MIN_SAFE_INTEGER
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        highest = Math.max(highest, sum)
        if(sum<0){
            sum=0
        }
        // sum = sum<0 ? 0 : sum
    }
    
    return highest
};