var matrix = [
    [-3, -2, -1, 1],
    [-2, 2, 3, 4],
    [4, 5, 7, 8]
];
var findNegativeNumbersInMatrix = function (matrix) {
    var count = 0;
    var row = 0;
    var column = matrix[0].length - 1;
    while (row < matrix.length && column >= 0) {
        if (matrix[row][column] < 0) {
            count += column + 1;
            row++;
        }
        else {
            column--;
        }
    }
    return count;
};
console.log(findNegativeNumbersInMatrix(matrix));
