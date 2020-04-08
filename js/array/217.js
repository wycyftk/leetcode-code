var containsDuplicate = function(nums) {
  var elArray = {};
  for (var i = 0; i < nums.length; i++) {
    if (elArray[nums[i]]) {
      return true;
    } else {
      elArray[nums[i]] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1]));