var twoSum = function(numbers, target) {
  var s = 0, e = numbers.length - 1;
  while (s < e) {
    var sum = numbers[s] + numbers[e];
    if (sum > target) {
      e--;
    } else if (sum < target) {
      s++;
    } else {
      return [s + 1, e + 1];
    }
  }
};

console.log(twoSum([2,7,11,15], 9));