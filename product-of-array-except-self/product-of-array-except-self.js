/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr=[], turn=false, mutiple=1
    for(let i=0; i<nums.length;i++){
        // console.log("works")
        arr[i]=mutiple
        mutiple*=nums[i]
    }
    
    console.log(arr)
    
    mutiple = 1 
    for(let j=nums.length-1; j>=0;j--){
        console.log(mutiple,nums[j],arr[j])
        arr[j]*=mutiple
        mutiple*=nums[j]
    }
    
    return arr
    
};