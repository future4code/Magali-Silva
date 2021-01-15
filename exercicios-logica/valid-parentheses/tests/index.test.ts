import { validParentheses } from "../src"

describe("Testing 'validParentheses'", () => {
    test("'()' return true", () => {
        const result = validParentheses("()")

        expect(result).toBe(true)
    })

    test("'()[]{}' return true", () => {
        const result = validParentheses("()[]{}")

        expect(result).toBe(true)
    })

    test("'{[]}' return true", () => {
        const result = validParentheses("{[]}")

        expect(result).toBe(true)
    })

    test("'(]' return false", () => {
        const result = validParentheses("(]")

        expect(result).toBe(false)
    })

    test("'([)]' return false", () => {
        const result = validParentheses("([)]")

        expect(result).toBe(false)
    })    
})