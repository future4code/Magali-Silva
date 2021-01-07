const matrixA: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const matrixB: number[][] = [
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
]

const matrixC: number[][] = [
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
]

console.log("matriz: colunas:", matrixC[0].length)
console.log("matriz: linhas:", matrixC.length)

const printMatrix = (matrix: number[][]): void => {
    for (const row of matrix) {
        for (const number of row) {
            console.log(number)
        }
    }
}

printMatrix(matrixA)


const sumMatrix = (matrixA: number[][], matrixB: number[][]): number[][] => {
    let newMatrix: number[][] = []
    
    if (
        matrixA.length !== matrixB.length ||
        matrixA[0].length !== matrixB[0].length
        ) {
        throw new Error("Matrizes com dimensões diferentes.")
    }
    const columnSize = matrixA.length
    const rowSize = matrixB[0].length


    for (let i = 0; i < rowSize; i++) {
        let newMatrixRow = []
    
        for (let j = 0; j < columnSize; j++) {
            newMatrixRow.push(matrixA[i][j] + matrixB[i][j])
        }

        newMatrix.push(newMatrixRow)        
    }
    return newMatrix
}

console.log(sumMatrix(matrixA, matrixB))


const transposeMatrix = (matrix: number[][]): number[][] => {
    let newMatrix: number[][] = []
    const columnSize = matrixC.length
    const rowSize = matrixC[0].length

    for (let i = 0; i < rowSize; i++) {
        let newMatrixRow = []

        for (let j = 0; j < columnSize; j++) {
            newMatrixRow.push(matrixC[j][i])
        }

        newMatrix.push(newMatrixRow)
    }
    return newMatrix
}

console.log(matrixC)
console.log(transposeMatrix(matrixC))

const multiplyMatrix = (matrixA: number[][], matrixB: number[][]): number[][] => {
    let newMatrix: number[][] = []

    for (let i = 0; i < matrixA.length; i++) {
        let row = []

        for (let j = 0; j < matrixB[0].length; j++) {
            let sumResult = 0
            for (let k = 0; k < matrixA[0].length; k++) {
                sumResult += matrixA[i][k] * matrixB[k][j]
                
            }
            row.push(sumResult)
        }

        newMatrix.push(row)
    }
    return newMatrix
}

console.log(multiplyMatrix(matrixA, matrixB))
