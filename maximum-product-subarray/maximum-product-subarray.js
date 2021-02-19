/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let max = nums[0]
   let currentMax = nums[0]
   let minMax = nums[0]
   
   for(let i=1;i<nums.length;i++){
       const num = nums[i], temp = currentMax
       currentMax = Math.max(currentMax*num,minMax*num,num)
       minMax = Math.min(temp*num,minMax*num,num)
       max = Math.max(currentMax, max)
   }
    
    return max
};