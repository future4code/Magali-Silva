export const findMissingNumber = (array: number[]): number => {
    const expectedSum = 5050
    let sum = 0

    for (const number of array) {
        sum += number
    }

    return expectedSum - sum
}