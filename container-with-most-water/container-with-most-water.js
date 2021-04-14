/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0, j=height.length-1, area
    for(let i=0;i<height.length;i++){
        area=(j-i)*Math.min(height[i],height[j])
        console.log(area)
        maxArea=Math.max(area,maxArea)
        if(height[i]>height[j]){
            i--
            j--
        }
    }
    return maxArea
};