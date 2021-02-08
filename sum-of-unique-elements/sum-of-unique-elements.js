/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let keys={}
    for(let i=0;i<nums.length;i++){
        const num = nums[i]
        if (keys[num]) {keys[num]++}
        else{keys[num] = 1}
    }
    console.log(keys)
    let sum = 0
    
    for(let num in keys){
        console.log(keys[num]===1,"this is")
        // console.log(parseInt(num)+)
        if(keys[num]===1)sum=sum + parseInt(num)
    }
    // console.log(sum)
    // arr.reduce((sum,v)=>sum+v,0)
    return sum
};