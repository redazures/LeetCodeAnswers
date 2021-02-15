/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
//     let arr = new Array(nums.length).fill(Infinity)
//     arr[0] = 0 
    
//     for(let i=1;i<nums.length;i++){
//         for(let j=0;j<i;j++){
//             if(arr[j]!==Infinity && j + nums[j] >= i){
//                 arr[i] = Math.min(arr[i],arr[j]+1)
//             }
//         }
//     }
    
//     return arr[arr.length-1]
    let jumps = 0 
    if(!nums || !nums.length) return -1;
    let start = 0, end = 0, jump = 0;
    while(end < nums.length -1) {
        jump++;
        let farthest = end;
        for(let i = start; i <= end; i++) {
            if(nums[i] + i > farthest) {
                farthest = nums[i] + i;
            }
        }
        start = end + 1;
        end = farthest; 
    }
    return jump
};