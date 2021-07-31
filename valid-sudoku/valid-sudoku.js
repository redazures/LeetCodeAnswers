/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let validate={'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0}
    
    //row
    for(let i=0;i<board.length;i++){
        for(let k=0;k<board[i].length;k++){
            const slot = board[i][k]
            validate[slot]++
            if(validate[slot]>1)return false
        }
        validate={'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0}
    }
    //column
    for(let i=0;i<board.length;i++){
        for(let k=0;k<board[i].length;k++){
            const slot = board[k][i]
            validate[slot]++
            if(validate[slot]>1)return false
        }
        validate={'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0}
    }
    
    for (let i = 0; i < board.length; i = i + 3){
        for (let j = 0; j < board[0].length; j = j + 3) {
            let matrixMap = {};
            let subX = i + 3;
            let subY = j + 3;
            for (let k = i; k < subX; k++) {
                for (let l = j; l < subY; l++) {
                    let currentValue = board[k][l];
                    if (currentValue === '.') continue;
                    if (matrixMap[currentValue] === undefined) {
                        matrixMap[currentValue] = currentValue;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    
    return true
};