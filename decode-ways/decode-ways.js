/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s[0] === '0') { return 0; }
    
    let dp = new Array(s.length + 1).fill(0);
    dp[1] = 1;
    
    for (let i = 2; i <= s.length; i++) {
        let c = s[i - 1], p = s[i - 2], n = parseInt(p + c);
        
        if (c !== '0') { dp[i] += dp[i - 1]; }
        if (p !== '0' && n <= 26) { dp[i] += Math.max(dp[i - 2], 1); }
        if (dp[i] === 0) { return 0; }
    }
    return dp[s.length];
};