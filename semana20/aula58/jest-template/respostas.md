# Semana 20 - Aula 58:

### Exercício 1:
a.
```
export interface User {
    name: string
    balance: number
}
```

b.
```
export function performPurchase(user: User, value: number) {

    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}
```




### Exercício 2:
a.
```
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
```

b.
```
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
```

c.
```
    test("User with a balance less than the purchase amount", () => {
        const user: User = {
            name: "Magali",
            balance: 70
        }
    
        const result = performPurchase(user, 100)
    
        expect(result).toEqual(undefined)
    })
```




### Exercício 3:
b.
```
export function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
            break;
        }
    }

    return {
        brazilians: {
            allowed:
                allowed
                    .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                    .map((u) => u.name),
            unallowed:
                unallowed
                    .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                    .map((u) => u.name),
        },
        americans: {
            allowed:
                allowed
                    .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                    .map((u) => u.name),
            unallowed:
                unallowed
                    .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                    .map((u) => u.name),
        },
    };
}
```

c. O retorno da função.




### Exercício 4:
a.
```
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
```

b.
```
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
```

c.
```
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
```

d.
```
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
```




### Exercício 5:
a.
```
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
```

b.
```
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
```

c.
```
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
```

d.
```
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
```


