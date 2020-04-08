/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  var count = 0, orange_2 = [], orange_temp = [];
  var d = grid.length, l = grid[0].length;

  for (var i = 0; i < d; i++) {
    for (var j = 0; j < l; j++) {
      if (grid[i][j] === 2) {
        var c = i * l + j;
        orange_2.push(c);
      }
    }
  }

  while (orange_2.length > 0) {
    var orange = orange_2.shift();
    var x = Math.floor(orange / l), y = orange % l;

    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      orange_temp.push( (x - 1) * l + y);
    }

    if (x < d - 1 && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      orange_temp.push( (x + 1) * l + y);
    }

    if (y > 0 && grid[x][y - 1] == 1) {
      grid[x][y - 1] = 2;
      orange_temp.push( x * l + y - 1);
    }

    if (y < l - 1 && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      orange_temp.push( x * l + y + 1);
    }

    if (orange_2.length == 0) {
      count++;
      orange_2 = orange_temp;
      orange_temp = [];
    }
  }

  for (var i = 0; i < d; i++) {
    for (var j = 0; j < l; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return count > 0 ? count - 1 : 0;
};

console.log(orangesRotting([[0]]));

[2,1,1]
[1,1,0]
[0,1,1]