class Solution:
  def longestPalindrome(self, s: str) -> int:
    count = 0
    cd = {}
    for c in s:
        cd[c] = s.count(c)
    for v in cd.values():
        if v % 2 == 1:
            count += (v - 1)
        else:
            count += v
    if len(s) > count:
        count += 1
    return count