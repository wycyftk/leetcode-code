/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var l = 0, r = height.length - 1, area = 0;

  while (l < r) {
    area = Math.max(area, Math.min(height[l], height[r]) * (r - l));

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));