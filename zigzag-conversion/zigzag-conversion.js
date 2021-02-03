/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1)return s
    let stairs = new Array(numRows).fill('')
    let turn = false
    
    let j = 0
    for(let i=0;i<s.length;i++){
        stairs[j] +=s[i]
        if(turn===false)j++
        if(turn===true)j--
        if(j===(numRows-1) || j===0)turn = !turn
    }
    
    return stairs.join("")
};