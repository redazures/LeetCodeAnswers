/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length<2)return false
    let starter = new Map()
    
    let opens = '({['
    let closes = ')}]'
    
    let stack  = []
    
    for(let i=0;i<opens.length;i++){
        starter.set(opens[i], closes[i])
    }
    
    for(let i=0;i<s.length;i++){
        if(starter.has(s[i])){
            stack.push(s[i])
            continue
        }
            
        const lastItem = stack[stack.length-1]
        const closeBracket = starter.get(lastItem)
        if(closeBracket === s[i]){
            stack.pop()
            continue
        }
        
        return false
            
    }
    // console.log(stack)
    return stack.length===0 ? true : false
    
};