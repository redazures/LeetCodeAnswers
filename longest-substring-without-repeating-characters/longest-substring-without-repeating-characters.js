/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let counter={}
    let start = 0
    for(let i=0;i<s.length;i++){
        let current=s[i]
        if (counter[current]) {
            start=Math.max(start,counter[current])
        }
        longest=Math.max(longest,i-start+1)
        counter[current]=i+1
    }
    return longest
};