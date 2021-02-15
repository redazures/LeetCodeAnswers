/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s[0] === '0') { return 0; }
    
    let arr = new Array(s.length + 1).fill(0);
    arr[1] = 1;
    
    for(let i=2;i <=s.length; i++){
        let curr = s[i-1], prev=s[i-2], num = parseInt(prev + curr)
        
        if(curr!=='0'){
            arr[i] += arr[i-1]
        }
        
        if(prev !== '0' && num <= 26){
            arr[i] += Math.max(arr[i-2],1)
        }
        if (arr[i]===0) return 0
    }
    
    return arr[s.length];
    
};