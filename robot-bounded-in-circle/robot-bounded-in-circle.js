/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x=0, y=0, dx=0, dy=1, temp
  for(let letter of instructions){
      if(letter ==="L"){
          temp = dy;
          dy = dx
          dx = -temp
      }else if(letter==="R"){
          temp =dx
          dx=dy
          dy=-temp
      }else{
          x=x+dx
          y=y+dy
      }
  }
    return (!x && !y) || dy !==1
};