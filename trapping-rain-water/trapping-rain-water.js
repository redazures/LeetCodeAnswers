/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length===0) return 0
    let sum = 0, start, end, max=0, index=0
    
    for (let j =0;j<height.length;j++){
        let prev = max
        max = Math.max(max,height[j])
        if (prev!==max)index=j
    }
    
    // console.log(index)
    
    for(let i=0;i<index;i++){
        const current = height[i]
        if(!start && height[i]>0){
            start = height[i]
        }else if(current>=start){
            start = height[i]
        }else if(start){
            sum+= (start-height[i])
        }
    }
    // console.log(sum)
    
    for(let k=height.length-1;k>index;k--){
        const current = height[k]
        if(!end && height[k]>0){
            end = height[k]
        }else if(current>=end){
            end = height[k]
        }else if(end){
            sum+= (end-height[k])
        }
    }
    
    return sum
};