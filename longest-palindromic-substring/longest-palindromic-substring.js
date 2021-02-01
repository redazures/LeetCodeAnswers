/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length<2) return s
    
    var isPalin=(start,end,s)=>{
        let palin = ""
        while(s[start]===s[end] && start>=0 &&end<=s.length){
            palin=s.substring(start,end+1)
            start-=1
            end+=1
        }
        return palin
    }
    
    let maxString = ""
    for(let i=0;i<s.length;i++){
        const odd =isPalin(i,i,s)
        const even =isPalin(i,i+1,s)
        const longer = odd.length>=even.length ? odd : even
        maxString = maxString.length>=longer.length ? maxString : longer
    }

    return maxString
};