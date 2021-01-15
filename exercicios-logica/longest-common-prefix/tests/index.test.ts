import { longestCommonPrefix } from "../src"

describe("Testing 'longestCommonPrefix'", () => {
    test("Case: 'fl'", () => {
        const input: string[] = ["flower","flow","flight"]
        const result = longestCommonPrefix(input)

        expect(result).toBe("fl")
    })

    test("Case: ''", () => {
        const input: string[] = ["dog","racecar","car"]
        const result = longestCommonPrefix(input)

        expect(result).toBe("")
    })

    test("Case: 'cor'", () => {
        const input: string[] = ["coracao","cor","corona","coreia"]
        const result = longestCommonPrefix(input)

        expect(result).toBe("cor")
    })   
})