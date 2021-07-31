/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x=0,y=0,dy=1,dx=0, temp
    for(const letter of instructions){
        if(letter==="R"){
            temp = dx
            dx=dy
            dy=-temp
        } else if(letter==="L"){
            temp=dy
            dy=dx
            dx=-temp
        } else {
            x=x+dx
            y=y+dy
        }
    }
    return(!x && !y) || dy!=1
    
};