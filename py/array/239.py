class Solution:
  def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
    q = collections.deque()
    r = []

    for i, n in enumerate(nums):
      while q and nums[q[-1]] < n:
        q.pop()
      q.append(i)

      if q[0] == i - k:
        q.popLeft()
      if i >= k - 1:
        r.append(nums[q[0]])
    return r