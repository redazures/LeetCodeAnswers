/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let newString= s.replace(/[^A-Z0-9]+/ig, "").toLowerCase()
    
    let start = 0 
    let end = newString.length-1
    while(start<end){
        if(newString[start]!=newString[end])return false
        start++
        end--
    }
    return true
};