function gridChallenge(grid) {
  let colsOrdered = "YES";

  for (let row in grid) {
    grid[row] = grid[row].split("").sort().join("");

    if (colsOrdered == "NO" || row == 0) continue;

    for (let col in grid[row]) {
      if (grid[row][col] < grid[row - 1][col]) {
        colsOrdered = "NO";
      }
    }
  }

  return colsOrdered;
}

// input ["a b c d", "b c d e", "c d e f"] -> abc bcd cde def -> output YES
// input ["a b c d", "b c d e", "c d e f"] -> cbe dca def adc -> outpu NO

console.log(gridChallenge(["kc", "iu"]));
