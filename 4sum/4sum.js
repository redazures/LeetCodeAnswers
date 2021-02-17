/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) return []
    nums.sort((a,b)=>a-b)
    let ans = []
    
    for(let i=0;i<nums.length-1;i++){
        const compare1 = nums[i]
        const compare2 = nums[i-1]
        if(i>0 && compare1 === compare2) continue
        for(let j=i+1;j<nums.length;j++){
            const contrast1 = nums[j]
            const contrast2 = nums[j-1]
            if(j>i+1 && contrast1 === contrast2) continue
            let left=j+1, right=nums.length-1    
            while(left<right){
                const sum = compare1+contrast1+nums[left]+nums[right]
                if(sum===target){
                    ans.push([compare1,contrast1,nums[left],nums[right]])
                }
                if (sum<=target){
                    while (nums[left] === nums[++left]);  
                } else {
                    while (nums[right] === nums[--right]);  
                }
            }
        }
        
    }
    return ans
};