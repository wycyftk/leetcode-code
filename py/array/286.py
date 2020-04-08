class Solution:
  def missingNumber(self, nums: List[int]) -> int:
    l = len(nums)
    sum1 = 0
    sum2 = l * (l + 1) / 2
    for n in nums:
        sum1 += n
    return int(sum2 - sum1)
    