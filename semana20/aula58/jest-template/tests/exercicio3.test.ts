import { User, NACIONALITY, Casino, LOCATION, verifyAge } from "../src/exercicio3"

describe("Testing whether the user can enter the casino", () => {

    test("Brazilian user allowed", () => {
        const brazilian: User = {
            name: "Magali",
            age: 25,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Magali"])
    })

    test("American user allowed", () => {
        const american: User = {
            name: "Magali",
            age: 25,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [american]);
        expect(result.americans.allowed).toEqual(["Magali"])
    })

    test("no user allowed", () => {
        const brazilian: User = {
            name: "Magali",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const secondBrazilian: User = {
            name: "Bea",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "Mag",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const secondAmerican: User = {
            name: "Ju",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [
            brazilian,
            secondBrazilian,
            american,
            secondAmerican
        ]);
        expect(result.brazilians.unallowed).toEqual(["Magali", "Bea"])
        expect(result.americans.unallowed).toEqual(["Mag", "Ju"])
    })

    test("2 Brazilians unallowed and 2 Americans allowed", () => {
        const brazilian: User = {
            name: "Magali",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const secondBrazilian: User = {
            name: "Bea",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "Mag",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const secondAmerican: User = {
            name: "Ju",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [
            brazilian,
            secondBrazilian,
            american,
            secondAmerican
        ]);
        expect(result.brazilians.unallowed).toEqual(["Magali", "Bea"])
        expect(result.americans.allowed).toEqual(["Mag", "Ju"])
    })

    // ===================

    test("Brazilian user allowed", () => {
        const brazilian: User = {
            name: "Magali",
            age: 25,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })


    test("American user allowed", () => {
        const american: User = {
            name: "Magali",
            age: 25,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american]);
        expect(result.brazilians.unallowed.length).toBe(0)
    })


    test("no user allowed", () => {
        const brazilian: User = {
            name: "Magali",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const secondBrazilian: User = {
            name: "Bea",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "Mag",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const secondAmerican: User = {
            name: "Ju",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [
            brazilian,
            secondBrazilian,
            american,
            secondAmerican
        ]);
        expect(result.brazilians.unallowed).toContain("Magali")
        expect(result.brazilians.unallowed).toContain("Bea")
        expect(result.americans.unallowed).toContain("Mag")
        expect(result.americans.unallowed).toContain("Ju")
    })


    test("2 Brazilians unallowed and 2 Americans allowed", () => {
        const brazilian: User = {
            name: "Magali",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const secondBrazilian: User = {
            name: "Bea",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "Mag",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const secondAmerican: User = {
            name: "Ju",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Nome casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [
            brazilian,
            secondBrazilian,
            american,
            secondAmerican
        ]);
        expect(result.brazilians.unallowed).toEqual(["Magali", "Bea"])
        expect(result.americans.allowed).toEqual(["Mag", "Ju"])
    })
})