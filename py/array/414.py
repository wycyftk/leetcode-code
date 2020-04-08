class Solution:
  def thirdMax(self, nums: List[int]) -> int:
    m1 = float('-inf')
    m2 = float('-inf')
    m3 = float('-inf')
    for n in nums:
      if n == m1 or n == m2 or n == m3:
        continue
      elif n > m1:
        m3 = m2
        m2 = m1
        m1 = n
        continue 
      elif n > m2:
        m3 = m2
        m2 = n
        continue 
      elif n > m3:
        m3 = n
    if m3 != float('-inf'):
      return m3
    else:
      return m1