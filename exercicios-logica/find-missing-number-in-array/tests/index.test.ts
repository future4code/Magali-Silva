import { findMissingNumber } from "../src"

describe("Testing 'findMissingNumber'", () => {
    test("Missing number 26", () => {
        const array: number[] = []

        for (let i = 1; i <= 100; i++) {
            if (i !== 26) {
                array.push(i)
            }
        }

        expect(array).not.toContain(26)
        expect(array.length).toEqual(99)

        const result = findMissingNumber(array)

        expect(result).toEqual(26)
    })

    test("Missing number 80", () => {
        const array: number[] = []

        for (let i = 1; i <= 100; i++) {
            if (i !== 80) {
                array.push(i)
            }
        }

        expect(array).not.toContain(80)
        expect(array.length).toEqual(99)

        const result = findMissingNumber(array)

        expect(result).toEqual(80)
    })
})