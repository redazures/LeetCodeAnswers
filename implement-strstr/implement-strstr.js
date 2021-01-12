/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length===0 || needle===haystack) return 0
    
    for(let j=0;j<haystack.length;j++){
        if(needle[0]===haystack[j]){
            if (needle===haystack.substr(j,needle.length)) return j 
        }
    }
    return -1
}
