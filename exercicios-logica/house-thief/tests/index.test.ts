import { maximumValueForTheft } from "../src"

describe("Testing 'maximumValueForTheft'", () => {
    test("Case: '[1,2,3,1]'", () => {
        const input = [1,2,3,1]
        const result = maximumValueForTheft(input)

        expect(result).toBe(4)
    })

    test("Case: '[2,7,9,3,1]'", () => {
        const input = [2,7,9,3,1]
        const result = maximumValueForTheft(input)

        expect(result).toBe(12)
    })

    test("Case: '[2,3,6,12,3,9,11,4]'", () => {
        const input = [2,3,6,12,3,9,11,4]
        const result = maximumValueForTheft(input)

        expect(result).toBe(28)
    })
})