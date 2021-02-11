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
    for(let i=0;i<s.length-(maxString.length/2);i++){
        const odd =isPalin(i,i,s)
        // const even = s[i]===s[i+1] ? isPalin(i,i+1,s) : ""
        //The above is slower for some reason
        const even = isPalin(i,i+1,s) 
        if(odd.length>even.length && odd.length>maxString.length){
            maxString=odd
        }else if(even.length>maxString.length){
            maxString=even
        }
    }

    return maxString
};