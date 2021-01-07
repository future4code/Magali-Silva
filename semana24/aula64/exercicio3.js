// Uma matriz poderia ser representada por um array de arrays.
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
var changeMatrix = function (matrix, rowIndex, columnIndex, value) {
    if (matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined) {
        throw new Error("Fora do intervalo da matriz");
    }
    matrix[rowIndex][columnIndex] = value;
};
changeMatrix(matrix, 0, 0, 10);
console.log(matrix);
changeMatrix(matrix, 1, 0, 11);
console.log(matrix);
changeMatrix(matrix, 2, 0, 12);
console.log(matrix);
changeMatrix(matrix, 7, 7, 12);
console.log(matrix);
