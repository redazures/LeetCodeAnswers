/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea=0
    for(let i=0; i<height.length; i++){
        for(let j=i+1;j<height.length;j++){
            const tall=Math.min(height[i],height[j])
            const width=j-i
            const area=tall*width
            // console.log(tall,width,area)
            maxArea=Math.max(area,maxArea)
            // console.log(maxArea, area)
        }
    }
    return maxArea
};
