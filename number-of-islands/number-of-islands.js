/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  
    const validateIsland =  (x,y,grid) =>{
        let stack = [[x,y]]
        while(stack.length>0){
            let [ a, b ] = stack.pop()
            grid[a][b]="J"
            if(grid[a+1] && grid[a+1][b]==="1")stack.push([a+1,b])
            if(grid[a-1] && grid[a-1][b]==="1")stack.push([a-1,b])
            if(grid[a][b+1] && grid[a][b+1]==="1")stack.push([a,b+1])
            if(grid[a][b-1] && grid[a][b-1]==="1")stack.push([a,b-1])
        }
    }
    
    // validateIsland(0,0,grid)
    let counter = 0 
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            // console.log(grid[i][j])
            // console.log("what")
            if(grid[i][j]==="1"){
                validateIsland(i,j,grid)
                counter++
                // console.log("checking")
            }
        }
    }
    return counter
};