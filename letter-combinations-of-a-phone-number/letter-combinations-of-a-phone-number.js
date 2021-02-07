/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits==="")return[]
    key={ "1":[],
     "2":["a","b","c"],
     "3":["d","e","f"],
     "4":["g","h","i"],
     "5":["j","k","l"],
     "6":["m","n","o"],
     "7":["p","q","r","s"],
     "8":["t","u","v"],
     "9":["w","x","y","z"],
    }
    
    let results = [...key[digits[0]]]
    
    
    for(let i=1;i<digits.length;i++){
        const num = digits[i]
        const letters = key[num]
        let temp =[]
        for(let j=0;j<results.length;j++){
            for(let k=0;k<letters.length;k++){
                temp.push(results[j]+letters[k])
            }
        }
        results=temp
    }
    return results
};