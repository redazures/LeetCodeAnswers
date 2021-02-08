/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const swap=(idx1,idx2,arr)=>{
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
    }
    
    for(let i =0;i<A.length;i++){
        const row = A[i]
        const mid = Math.floor(row.length/2)
        for(let j =0;j<mid;j++){
            swap(j,row.length-1-j,row) 
        }
        for(let k =0;k<row.length;k++){
            if(row[k]===1){
                row[k]=0
            }else{
                row[k]=1
            }
        }
    }
    return A
};