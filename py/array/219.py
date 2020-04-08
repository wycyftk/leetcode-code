class Solution:
  def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
    numsDict = {}
    for i in range(len(nums)):
      if (nums[i] in numsDict) and (i - numsDict[nums[i]] <= k):
        return True
      else:
        numsDict[nums[i]] = i
    return False