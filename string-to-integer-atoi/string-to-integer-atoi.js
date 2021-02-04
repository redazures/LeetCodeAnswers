/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let trimmed = s.trim()
    let parsed = parseInt(trimmed, 10)
    //console.log(s,trimmed, parsed)
    if (isNaN(parsed)) {
        return 0
    } else if (parsed >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1   
    } else if (parsed <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return parsed
    }
};