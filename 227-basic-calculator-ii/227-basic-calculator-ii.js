/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const special = {"*":1, "/":2," ":5,"-":3, "+":4}
    s=s+"+"
    let stack = [], sign=undefined, number=""
    for(let i=0; i<s.length; i++){
        const char = s[i]
        if(special[char]===5) continue
        if(special[char] && special[char]<5){
            let int = Number(number)
            if(sign==="-"){
                int = -int
            }
            if(sign==="*"){
                const last  = stack.pop()
                int = int*last
            }
            if(sign==="/"){
                const last  = stack.pop()
                if(last<0){
                    int = Math.ceil(last/int)
                }else{
                    int = Math.floor(last/int)   
                }
            }
            stack.push(int)
            sign = char
            number=""
        }else{
            number+=char
        }
        sign
    }
    return stack.reduce((a,b)=>a+b)
};