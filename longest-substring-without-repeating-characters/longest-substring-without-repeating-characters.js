/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), start = 0, maxLen = 0
    for(let i=0;i<s.length;i++){
        const ltr = s[i]
        if(map.get(ltr)>=start)start=map.get(ltr)+1
        map.set(s[i], i)
        maxLen = Math.max(maxLen, i-start+1)
    }
    return maxLen
};