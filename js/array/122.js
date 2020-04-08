var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;

  var sum = 0;
  for (var i = 1; i < prices.length; i++) {
    sum += Math.max(prices[i] - prices[i - 1], 0);
  }

  return sum;
};

console.log(maxProfit([1,2,3,4,5]));