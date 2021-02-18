/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let key ={}
    for(let i=0; i<order.length; i++){
        const letter = order[i]
        key[letter] = i+1
    }
    
    for(let j=1;j<words.length;j++){
        const word = words[j]
        const prev = words[j-1]
        let compare = 0 
        let largerLetter, smallerLetter
        while(compare === 0 || largerLetter || smallerLetter){
            largerLetter = word[compare]
            smallerLetter = prev[compare]
            const larger = key[largerLetter] || -1
            const smaller = key[smallerLetter] || -1
            console.log(larger,smaller)
            if(smaller>larger) return false 
            if(larger>smaller) break
            compare++
        }
    }
    return true
};