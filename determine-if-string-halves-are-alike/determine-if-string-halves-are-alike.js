/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"])
    const mid = s.length/2-1
    let count = 0
    for(let i=0;i<s.length;i++){
        const num = s[i]
        if(i<=mid && vowels.has(num))count++
        if(i>mid && vowels.has(num))count--
        
    }
    return count===0
};