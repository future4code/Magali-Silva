// Uma matriz poderia ser representada por um array de arrays.

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix)

const changeMatrix = (matrix: number[][], rowIndex: number, columnIndex: number, value: number): void => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz")
    }

    matrix[rowIndex][columnIndex] = value
}

changeMatrix(matrix, 0, 0, 10)
console.log(matrix)

changeMatrix(matrix, 1, 0, 11)
console.log(matrix)

changeMatrix(matrix, 2, 0, 12)
console.log(matrix)

changeMatrix(matrix, 7, 7, 12)
console.log(matrix)