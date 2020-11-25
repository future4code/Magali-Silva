export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
}

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