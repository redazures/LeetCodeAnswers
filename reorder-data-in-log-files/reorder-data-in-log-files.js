/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let newArray = [], answer = []
    for(let i=logs.length-1; i>=0;i--){
        if(!parseInt(logs[i].split(" ")[1]) && parseInt(logs[i].split(" ")[1])!=0){
            const sentence = logs.splice(i,1)
            const words = sentence[0].split(" ")
            newArray.push(words)
        }
    }
    
    if(newArray.sort((a,b)=>{
        let i = 1
        while(i<a.length){
            if(a[i]!=b[i]){
                break
            }
            i++
        }
        if(!b[i])return
        return a[i].localeCompare(b[i])
    }))
    
    for(let sentence of newArray){
        answer.push(sentence.join(" "))
    }
    return answer.concat(logs)
    
};