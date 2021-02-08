/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
//     let keys={}
//     let sum = 0
//     for(let i=0;i<nums.length;i++){
//         const num = nums[i]
//         if (!keys[num]) {
//             keys[num] = 1
//             sum+=num
//         }
//         else {
//             keys[num]++
//             if(keys[num]===2)sum-=num
//         }
//     }
    
//     // for(let num in keys){
//     //     if(keys[num]===1)sum=sum + parseInt(num)
//     // }
//     return sum
    
           let map = new Object();
    nums.forEach(num => {
        if(map[num] != null) map[num] += 1;
        else map[num] = 1;
    })
    let sum = 0;
    Object.keys(map).forEach(k => {
        if(map[k] === 1)   sum += +k
    })
    return sum;
    
};