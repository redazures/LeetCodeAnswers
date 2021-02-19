/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr=[], mutiple=1
    for(let i=0; i<nums.length;i++){
        arr[i]=mutiple
        mutiple*=nums[i]
    }
    
    mutiple = 1 
    for(let j=nums.length-1; j>=0;j--){
        arr[j]*=mutiple
        mutiple*=nums[j]
    }
    
    return arr
    
};