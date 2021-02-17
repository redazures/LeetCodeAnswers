/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res = []
    
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]===nums[i-1]) continue
        let left = i+1, right=nums.length-1
        while(left<right){
            const sum = nums[i]+nums[left]+nums[right]
            // console.log(nums[i],nums[left],nums[right],sum,res)
            if(sum===0){
                res.push([nums[i],nums[left],nums[right]])
                while(nums[left]===nums[left+1])left++
                while(nums[right]===nums[right+1])right--
                left++
                right--
            }else if(sum>0){
                right--
            }else if (sum<0) {
                left++
            }
        }
    }
    return res
};