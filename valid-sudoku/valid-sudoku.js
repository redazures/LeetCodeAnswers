/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let validate = new Set()
    for(let i=0;i<board.length;i++){
        for(let j=0; j<board.length;j++){
            const slot = board[i][j]
            if(slot!="."){
                const row = `row ${i}-num ${slot}`
                const column = `col ${j}-num ${slot}`
                const innerBox = `innerBox ${parseInt(i/3)} ${parseInt(j/3)} ${slot}`
                if(!validate.has(row) && !validate.has(column) && !validate.has(innerBox)){
                    validate.add(row)
                    validate.add(column)
                    validate.add(innerBox)
                }else{
                    return false
                }
            }
        }
    }
    return true
    
};