/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length===0)return 1
    
    let sorter = []
    
    for(let num of nums){
        if(num>0)sorter[num]=num   
    }
    
    if(sorter[sorter.length-1]===undefined)return 1
    
    for(let i=1;i<sorter.length;i++){
        if(sorter[i]===undefined)return i
    }
    
    return sorter[sorter.length-1]+1
};