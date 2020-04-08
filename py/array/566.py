class Solution:
  def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
    arr = []
    for n in nums:
      for m in n:
        arr.append(m)

    if len(arr) != r * c:
      return nums
    
    result = []
    for i in range(r):
      s = i * c
      result.append([arr[s: s + c]])
    return result