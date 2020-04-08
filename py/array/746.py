class Solution:
  def minCostClimbingStairs(self, cost: List[int]) -> int:
    return min(self.getCostClimbing(0, cost), self.getCostClimbing(1, cost))

  def getCostClimbing(self, i, cost: List[int]) -> int:
    r = 0
    l = len(cost) - 1
    while i < l:
      if cost[i] < cost[i + 1]:
        r += cost[i]
        i += 1
      else:
        r += cost[i + 1]
        i += 2
    return r