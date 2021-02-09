/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length<=2) return 0

    let start, end, sum=0, max=0, index=0
    
    for(let k=0;k<height.length;k++){
        const prev = max
        max=Math.max(max,height[k])
        if(prev!==max)index=k
    }
    
    for(let i=0;i<index;i++){
        if(!start || height[i]>start){
            start=height[i]
        }
        else{
            sum+=(start-height[i])
        }
    }
    
    for(let j=height.length-1;j>index;j--){
        if(!end || height[j]>end){
            end=height[j]
        }
        else{
            sum+=(end-height[j])
        }
    }
    
    return sum
};