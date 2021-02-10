/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums) return -1
    let start = 0, end=nums.length-1
    while(start<=end){
        const mid = Math.floor((end+start)/2)
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){
            start=mid+1
        }else if(nums[mid]>target){
            end=mid-1
        }
        // console.log(start,end,mid)
    }
    return -1
};