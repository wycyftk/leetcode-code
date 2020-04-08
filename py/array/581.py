class Solution:
  # 超时
  def findUnsortedSubarray(self, nums: List[int]) -> int:
    i = 0
    j = 0
    c = l = len(nums)
    # 正序遍历
    while i < l - 1:
      j = i + 1
      sign = False
      while j < l:
        if nums[i] < nums[j]:
          sign = True
          break
        j += 1
      if sign:
        break
      else:
        c -= 1
      i += 1
    
    if c == 0:
      return 0

    # 倒序遍历
    i = l - 1 
    s = l - c 
    while i > s:
      j = i - 1
      sign = False
      while j >= 0:
        if nums[i] < nums[j]:
          sign = True
        j -= 1
      if sign:
        break
      else:
        c -= 1
      i -= 1

    return c

  def findUnsortedSubarray(self, nums: List[int]) -> int:
    numsList = sorted(nums)
    r = l = len(nums)
    if numsList == nums:
      return 0
    
    for i in range(l):
      if nums[i] != numsList[i]:
        r -= i + 1
        break
    
    for j in range(l - 1, -1, -1):
      if nums[j] != numsList[j]:
        r -= l - j - 1
    return r