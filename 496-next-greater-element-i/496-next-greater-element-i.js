/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let index = {}, res = []
    nums2.forEach((el,idx)=>{
        index[el] = -1
        for(let i=idx;i<nums2.length;i++){
            const num = nums2[i]
            if(el<num && index[el]===-1){
                index[el] = num
            }
        }        
    })
    nums1.forEach((el)=>{
        const idx = index[el]
        res.push(idx)
    })
    return res
};