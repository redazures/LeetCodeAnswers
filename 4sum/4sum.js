/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    nums.sort((a,b)=>a-b)
    
    const ans = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                for(let l=k+1;l<nums.length;l++){
                    if(nums[i]+nums[j]+nums[k]+nums[l]===target){
                        ans.push([nums[i],nums[j],nums[k],nums[l]])
                    }
                }
            }
        }
    }
    
    // console.log(ans)
    
    for(let i=0;i<ans.length-1;i++){
        for(let j=i+1;j<ans.length;j++){
            console.log(ans[i],ans[j])
            let [one, two, three] = ans[i]
            let [oneNext, twoNext, threeNext] = ans[j]
            if(one===oneNext && two===twoNext && three===threeNext){
                ans.splice(j,1)
                j--
            }
        }
    }
    
    return ans
};