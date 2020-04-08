class Solution:
  def canThreePartsEqualSum(self, A: List[int]) -> bool:
    s, ts, tempS
    c = 0
    for n in A:
      s += n

    if s % 3 != 0:
      return False

    ts = int(s / 3)
    for i in range(len(A)):
      tempS += A[i]
      if tempS == ts:
        tempS = 0
        c += 1
    return c == 3