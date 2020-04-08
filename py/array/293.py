class Solution:
  def moveZeroes(self, nums: List[int]) -> None:
    zoreCount = 0
    l = len(nums)
    for i in range(l):
      if nums[i] == 0:
        zoreCount += 1
      else:
        nums[i - zoreCount] = nums[i]
    for j in range(l - zoreCount, l):
      nums[j] = 0