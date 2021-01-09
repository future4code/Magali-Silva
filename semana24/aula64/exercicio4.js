var matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var matrixB = [
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
];
var matrixC = [
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
];
console.log("matriz: colunas:", matrixC[0].length);
console.log("matriz: linhas:", matrixC.length);
var printMatrix = function (matrix) {
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var number = row_1[_a];
            console.log(number);
        }
    }
};
printMatrix(matrixA);
var sumMatrix = function (matrixA, matrixB) {
    var newMatrix = [];
    if (matrixA.length !== matrixB.length ||
        matrixA[0].length !== matrixB[0].length) {
        throw new Error("Matrizes com dimensões diferentes.");
    }
    var columnSize = matrixA.length;
    var rowSize = matrixB[0].length;
    for (var i = 0; i < rowSize; i++) {
        var newMatrixRow = [];
        for (var j = 0; j < columnSize; j++) {
            newMatrixRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        newMatrix.push(newMatrixRow);
    }
    return newMatrix;
};
console.log(sumMatrix(matrixA, matrixB));
var transposeMatrix = function (matrix) {
    var newMatrix = [];
    var columnSize = matrixC.length;
    var rowSize = matrixC[0].length;
    for (var i = 0; i < rowSize; i++) {
        var newMatrixRow = [];
        for (var j = 0; j < columnSize; j++) {
            newMatrixRow.push(matrixC[j][i]);
        }
        newMatrix.push(newMatrixRow);
    }
    return newMatrix;
};
console.log(matrixC);
console.log(transposeMatrix(matrixC));
var multiplyMatrix = function (matrixA, matrixB) {
    var newMatrix = [];
    for (var i = 0; i < matrixA.length; i++) {
        var row = [];
        for (var j = 0; j < matrixB[0].length; j++) {
            var sumResult = 0;
            for (var k = 0; k < matrixA[0].length; k++) {
                sumResult += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sumResult);
        }
        newMatrix.push(row);
    }
    return newMatrix;
};
console.log(multiplyMatrix(matrixA, matrixB));
