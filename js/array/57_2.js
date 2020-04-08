/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

  序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  if (target < 3) return [];

  var result = [], s1 = 1, s2 = 2, sum = 3;
  while (s1 < Math.ceil(target / 2)) {
    
    if (sum == target) {
      result.push(generateArray(s1, s2));
    }

    if (sum >= target) {
      sum -= s1;
      s1++;
    } else {
      s2++;
      sum += s2;
    }
  }

  function generateArray(s, e) {
    var arr = [];
    for (var i = s; i <= e; i++) {
      arr.push(i);
    }
    return arr;
  }
  return result;
};

console.log(findContinuousSequence(15));