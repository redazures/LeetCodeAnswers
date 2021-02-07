/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
        if(!digits.length) return [];
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
    
    let answer = [...key[digits[0]]]
    
    for(let i=1; i<digits.length;i++){
        const digit = digits[i]
        const current = key[digit]
        const temp = []
        for(let j=0;j<answer.length;j++){
            for(let k=0;k<current.length;k++){
                temp.push(answer[j]+current[k])
            }
        }
        answer = temp
    }
    return answer
    
};