import { User, performPurchase } from "../src/exercicio1"

// Exercício 2: 
describe("Validate purchase", () => {
    // a.
    test("User with a balance greater than the purchase amount", () => {
        const user: User = {
            name: "Magali",
            balance: 500
        }
    
        const result = performPurchase(user, 100)
    
        expect(result).toEqual({
            ...user,
            balance: 400
        })
    })

    // b.
    test("User with the balance equal to the purchase value", () => {
        const user: User = {
            name: "Magali",
            balance: 100
        }
    
        const result = performPurchase(user, 100)
    
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    // c.
    test("User with a balance less than the purchase amount", () => {
        const user: User = {
            name: "Magali",
            balance: 70
        }
    
        const result = performPurchase(user, 100)
    
        expect(result).toEqual(undefined)
    })
})