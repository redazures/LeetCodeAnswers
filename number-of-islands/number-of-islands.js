/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count =0
    
    function connecting(x,y){
        let stack =[[x,y]]
        
        while(stack.length){
            const [x, y] = stack.pop()
            if(grid[x][y]==="1")grid[x][y]="2"
            // console.log(grid[x+1],grid[x][y+1],)
            if(grid[x+1] && grid[x+1][y]==="1" )stack.push([x+1,y])
            if(grid[x-1] && grid[x-1][y]==="1")stack.push([x-1,y])
            if(grid[x][y+1] && grid[x][y+1]==="1")stack.push([x,y+1])
            if(grid[x][y-1] && grid[x][y-1]==="1")stack.push([x,y-1])
            // console.log(x,y,stack)
        }    
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==="1"){
                connecting(i,j)
                count++
            }
        }
    }
    console.log(grid)
    return count
};