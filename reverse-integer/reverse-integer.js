/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x===0)return 0
    const string = x.toString()
    let answer = ""
    for(let i=0;i<string.length;i++){
        answer = string[i] + answer
    }
    if(parseInt(answer)>2147483647)return 0
    return x>0 ? parseInt(answer) : -parseInt(answer)
};