/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])

    for(let i=0;i<intervals.length;i++){
        let [ start, end ] = intervals[i]
        for(let j=i+1;j<intervals.length;j++){
            let [ nextStart, nextEnd ] = intervals[j]
            // console.log(intervals[i],intervals[j])
            if(start===nextStart || end>=nextStart ||end>=nextEnd){
                start=Math.min(start,nextStart)
                end=Math.max(end, nextEnd)
                intervals[i] = [ start, end ]
                intervals.splice(j,1)
                j--
            }
            // console.log(intervals)
        }   
    }
        
    return intervals
};