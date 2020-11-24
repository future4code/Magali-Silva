# Semana 20 - Aula 58:

### Exercício 1:
a.
```
export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
}
```

b.
```
export function validateCharacter(input: Character) {

    const {name, life, strength, defense} = input

    if (
        !name ||
        life === undefined ||
        strength === undefined ||
        defense === undefined
    ) {
        return false
    }

    if (
        life <= 0 ||
        strength <= 0 ||
        defense <= 0
    ) {
        return false
    }

    return true
}
```


### Exercício 2:
a.
```
test("Should return false for character with empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1000,
            strength: 500,
            defense: 500,
        });

        expect(result).toBe(false);
    })
```

b.
```
test("Should return false for character with life 0", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 0,
            strength: 500,
            defense: 500,
        });

        expect(result).toBe(false);
    })
```

c.
```
test("Should return false for character with strength 0", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: 0,
            defense: 500,
        });

        expect(result).toBe(false);
    })
```

d.
```
test("Should return false for character with defense 0", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: 500,
            defense: 0,
        });

        expect(result).toBe(false);
    })
```

e.
```
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
```

f.
```
test("Should return false for character with negative defense", () => {
        const result = validateCharacter({
            name: "Nome teste",
            life: 1000,
            strength: 500,
            defense: 500,
        });

        expect(result).toBe(true);
    })
```




### Exercício 3:
a.
```

```

b.
```

```

c.
```

```

d.
```

```


### Exercício 4:
a.
```

```

b.
```

```

c.
```

```

d.
```

```