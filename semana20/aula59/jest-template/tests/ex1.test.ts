import { validateCharacter } from "../src/ex1";

describe("testing the 'validateCharacter' function", () => {
    test("Should return false for character with empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1000,
            strength: 500,
            defense: 500,
        });

        expect(result).toBe(false);
    })


    test("Should return false for character with life 0", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 0,
            strength: 500,
            defense: 500,
        });

        expect(result).toBe(false);
    })

    test("Should return false for character with strength 0", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: 0,
            defense: 500,
        });

        expect(result).toBe(false);
    })

    test("Should return false for character with defense 0", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: 500,
            defense: 0,
        });

        expect(result).toBe(false);
    })

    test("Should return false for character with negative life", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: -1000,
            strength: 500,
            defense: 500,
        });

        expect(result).toBe(false);
    })

    test("Should return false for character with negative strength", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: -500,
            defense: 500,
        });

        expect(result).toBe(false);
    })

    test("Should return false for character with negative defense", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: 500,
            defense: -500,
        });

        expect(result).toBe(false);
    })

    test("Should return false for character with negative defense", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: 500,
            defense: 500,
        });

        expect(result).toBe(true);
    })
})