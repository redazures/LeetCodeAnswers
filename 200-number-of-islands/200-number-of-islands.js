/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numberOfIslands = 0
    const convertIsland = (grid, x, y) => {
        if(!grid[x])return
        if(!grid[x][y])return
        if(grid[x][y]==="1") {
            grid[x][y]="x" 
            if(grid[x+1] && grid[x+1][y])convertIsland(grid,x+1,y)
            if(grid[x-1] && grid[x-1][y])convertIsland(grid,x-1,y)
            if(grid[x] && grid[x][y+1])convertIsland(grid,x,y+1)
            if(grid[x] && grid[x][y-1])convertIsland(grid,x,y-1)
            return true   
        }
        return false
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            const land = convertIsland(grid,i,j)
            if(land){
                numberOfIslands=numberOfIslands+1
            }
        }   
    }
    return numberOfIslands
};