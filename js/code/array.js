/**
 * 88
 * @param {*} A 
 * @param {*} m 
 * @param {*} B 
 * @param {*} n 
 */
var merge = function(A, m, B, n) {
  var ia = 0, ib = 0, len = m + n;
  while (ia < len) {
      if (A[ia] >= B[ib]) {
          moveArr(A, B[ib], ia, ib);
          ib++;
      }
      ia++;
  }

  if (ib < n) {
    for (var i = ib; i < n; i++) {
      A[i + m] = B[i];
    }
  }

  function moveArr(arr, value, sa) {
      for (var i = len - 1; i > sa; i--) {
          arr[i] = arr[i - 1];
      }

      arr[sa] = value;
  }

  return A;
};


console.log(merge( [6,6,7,0,0,0], 3,  [2,5,5], 3));