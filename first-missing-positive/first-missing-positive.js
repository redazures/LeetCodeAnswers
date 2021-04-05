/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = 1
    nums.sort((a,b)=>a-b)
    // console.log(nums)
    for(let num of nums){
        // console.log(n,num)
        if(num==n)n++   
    }
    return n
};