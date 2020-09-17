
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let i = 1;
  while (i < matrix.length) {
    matrix[i] = matrix[i].reverse();
    i += 2;
  }
  return matrix.flat();
}

// console.log(towelSort([ [1, 2, 3], [4, 5, 6]]))
// console.log(towelSort())
// console.log(towelSort())
// console.log(towelSort())