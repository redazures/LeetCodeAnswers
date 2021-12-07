/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let l = 0;
  let r = height.length - 1;
  let lvl = 0;
  let sum = 0;

  while (l < r) {
    let lower = 0;
    if (height[l] < height[r]) {
      lower = height[l];
      l++;
    } else {
      lower = height[r];
      r--;
    }
    lvl = Math.max(lower, lvl);
    sum += lvl - lower;
  }
  
  return sum;
    
};