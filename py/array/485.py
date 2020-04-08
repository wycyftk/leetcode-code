class Solution:
  def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
    c = 0
    max = 0
    for n in nums:
      if (n == 1):
        c += 1
        if max < c:
          max = c
      else:
        c = 0
    return max