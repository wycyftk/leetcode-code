var majorityElement = function(nums) {
  var count = 0, e;
  for (var i = 0; i < nums.length; i++) {
    if (count == 0) {
      e = nums[i];
      count = 1;
    } else if (e == nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return e;
};

console.log(majorityElement([3,2,3]));