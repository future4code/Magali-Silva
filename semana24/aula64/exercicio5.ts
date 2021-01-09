const matrix: number[][] = [
    [-3, -2, -1, 1],
    [-2, 2, 3, 4],
    [4, 5, 7, 8]
]

const findNegativeNumbersInMatrix = (matrix: number[][]): number => {
    let count = 0;
    let row = 0;
    let column = matrix[0].length - 1;

    while (row < matrix.length && column >= 0) {
        if (matrix[row][column] < 0) {
            count += column + 1;
            row++;
        } else {
            column--;
        }
    }
    
    return count;
};

console.log(findNegativeNumbersInMatrix(matrix))