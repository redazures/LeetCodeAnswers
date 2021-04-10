/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let string = "balloon"
    let key = {}
    let letter, min=1000000
    for (let letter of string){
        if(key[letter]){
            key[letter]++
        }else{
            key[letter]=1
        }
    }
    for(let i=0;i<text.length;i++){
        letter = text[i]
        if (key[letter]){
            key[letter]++
        }
    }
    for(let letter in key){
        if(letter =="l" || letter=="o"){
            key[letter]/=2
        }
    }
    
    for(let letter in key){
        key[letter]
        min=Math.min(Math.floor(key[letter]-1),min)
    }
    
    return min
};