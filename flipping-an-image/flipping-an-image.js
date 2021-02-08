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
        for(let j =0;j<row.length;j++){
            if(j<mid)swap(j,row.length-1-j,row) 
            if(row[j]===1){
                row[j]=0
            }else{
                row[j]=1
            }
        }
    }
    return A
};