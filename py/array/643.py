class Solution:
  def findMaxAverage(self, nums: List[int], k: int) -> float:
    maxValue = float('inf')
    for i in range(0, len(nums) - k):
      if sum(nums[i: i + k]) > maxValue:
        maxValue = sum(nums[i: i + k])
    return maxValue / k