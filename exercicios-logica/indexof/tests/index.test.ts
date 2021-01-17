import { indexOf } from "../src"

describe("Testing 'indexOf'", () => {
    test("Find index of a character contained in string", () => {
        const result = indexOf("Abacate", "t")

        expect(result).toBe(5)
    })

    test("Not contain character in string", () => {
        const result = indexOf("Abacate com Banana", "p")

        expect(result).toBe(-1)
    })

    test("Find index of a query string contained in string", () => {
        const result = indexOf("Abacate com Banana", "com")

        expect(result).toBe(8)
    })

    
})