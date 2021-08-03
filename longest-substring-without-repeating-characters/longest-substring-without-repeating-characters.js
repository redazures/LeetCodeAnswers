/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0, map = new Map(), start = 0
    for(let i=0; i<s.length;i++){
        const ch = s[i]
        if(map.get(ch)>=start)start=map.get(ch)+1
        map.set(ch, i)
        maxLen=Math.max(i-start+1, maxLen)
    }
    return maxLen
};