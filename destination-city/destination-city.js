/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let keys = {}
    let finalDestination = {}
    for(let i=0;i<paths.length;i++){
        const [start, end] = paths[i]
        // console.log(start,end, keys[start],keys[end],keys)
        if(keys[start]) {
            keys[start]++   
        }else {
            keys[start] = 1
        }
        if(keys[end]) {
            keys[end]--  
        }else {
            keys[end] = -1
        }
        // console.log(keys)
    }
    
    for(let city in keys){
        if(keys[city]===-1)return city
    }
};