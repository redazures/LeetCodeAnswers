/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen=0, start = 0, map = new Map()
    for(let i=0; i<s.length; i++){
        const ch = s[i]
        if(map.get(ch)>=start)start = map.get(ch)+1
        map.set(ch, i)
      if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }
    return maxLen
};