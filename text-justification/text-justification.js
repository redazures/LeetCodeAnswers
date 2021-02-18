/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let results = []
    let line = []
    let lineLength = 0
    let str =""
    
    const addLineSpacing = (line) =>{
        for(let i = 0 ; i<line.length-1 ; i++){
            line[i] = line[i]+" "
        }
        return line
    }
     
    const distributeSpaces = (line, spaces)=>{
        while(spaces > 0 && line.length > 1 ){
            for(let i=0; i<line.length-1; i++){
                if(spaces<=0) break
                line[i] = line[i]+" "
                spaces--
            }
        }
        return line
    }
    
    const fillSpace = (line, space) => {
        while(space>0){
            line[line.length-1] += " "
            space--
        }
        return line
    }
    
    for(let i=0; i<words.length;i++){
        let word = words[i]
        if(lineLength===0 && word.length<=maxWidth){
            line.push(word)
            lineLength=word.length
            // console.log(lineLength, line.join("").length)
        }else if(lineLength+word.length+1 <=maxWidth){
            line.push(word)
            lineLength+=word.length+1
            // console.log(lineLength, line.join("").length)
        }else{
            line = addLineSpacing(line)
            let remainingSpaces = maxWidth-lineLength
            line = distributeSpaces(line, remainingSpaces)
            if(line.length===1) line = fillSpace(line, remainingSpaces)
            line = line.join("")
            results.push(line)
            line=[]
            line.push(word)
            lineLength=word.length
            // console.log(lineLength, line.join("").length)
        }
    }
    line = addLineSpacing(line)
    let remainingSpaces = maxWidth-lineLength
    // line = distributeSpaces(line, remainingSpaces)
    line = fillSpace(line, remainingSpaces)
    results.push(line.join(""))
    
    return results
    
};