/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a,b)=>a-b)
    verticalCuts.sort((a,b)=>a-b)
    horizontalCuts.push(h)
    verticalCuts.push(w)
    let maxHor = 0, maxVert = 0, prevHor = 0, prevVert = 0, temp
    for(const cut of horizontalCuts){
        temp = cut-prevHor
        if(temp>maxHor){
            maxHor = temp
        }
        prevHor = cut
    }
    for(const cut of verticalCuts){
        temp = cut-prevVert
        if(temp>maxVert){
            maxVert = temp
        }
        prevVert = cut
    }
    return BigInt(maxVert)*BigInt(maxHor)%1000000007n
};