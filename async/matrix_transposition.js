//Solution created by Daniel A. Andrew R with help from mentor Juliana
// You'll be implementing a function called transpose, which will receive an array of arrays as its only parameter. Your function must return a new array with the columns and rows switched. Note that we've included a printMatrix function, which nicely prints out your 2D arrays.
// console.log(
//   transpose([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//   ])
// );

// console.log(
//   tra,nspose([
//     [1 2],
//     [3, 4],
//     [5, 6],
//   ])
// );
// console.log(transpose([[1, 2, 3, 4, 5, 6, 7]]));

const transpose = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i+1; j < matrix.length; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;

    }
  }
  return matrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

//Expected outcome
//1 1 1 1
//2 2 2 2
//3 3 3 3
//4 4 4 4
//----
//1 3 5
//2 4 6
//----
//1
//2
//3
//4
//5
//6
//7