// ---------- EXERCÍCIO 1 ---------- 
// a.

const printNumbers = (number: number): void => {
    if (number >= 0) {
        printNumbers(number - 1)
        console.log(number)
    }
}

// printNumbers(4)
// printNumbers(18)

// b.

const printNumbersDescending = (number: number): void => {
    if (number >= 0) {
        console.log(number)
        printNumbers(number - 1)
    }
}

// printNumbersDescending(4)
// printNumbersDescending(18)

// ---------- EXERCÍCIO 2 ---------- 
const calculateSum = (number: number, acc: number = 0): number => {
    if (number === 0) return acc

    return calculateSum(number - 1, acc + number)
}

// console.log(calculateSum(4));
// console.log(calculateSum(8));


// ---------- EXERCÍCIO 3 ---------- 
const calculateSumInteractive = (number: number): number => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i
    }

    return sum
}

// console.log(calculateSumInteractive(4));
// console.log(calculateSumInteractive(8));

// ---------- EXERCÍCIO 4 ---------- 
const printArray = (array: number[], index: number = array.length - 1): void => {
    if (index >= 0) {
        printArray(array, index - 1)

        console.log(`Elemento ${index}`, array[index])
    }
}

const array = [1, 2, 3, 4];
// printArray(array);



// ---------- DESAFIO 4 ---------- 
const getDigits = (number: number, acc: number = 1): number => {
    if (number < 10) {
        return acc
    }

    return getDigits(number / 10, acc + 1)
}

// console.log(getDigits(4))
// console.log(getDigits(10))
// console.log(getDigits(105))
// console.log(getDigits(1056))

// ---------- DESAFIO 5 ----------
const getMaximum = (array: number[], index: number = 0, largest: number = 0): number => {
    let largestAux = largest

    if (array[index] > largest) {
        largestAux = array[index]
    }

    if (index === array.length - 1) {
        return largestAux
    }

    return getMaximum(array, index + 1, largestAux)
}

// console.log(getMaximum([1, 20, 55, 105, 10]))


// ---------- DESAFIO 6 ----------
const findFirstCapitalLetter = (
    string: string,
    character: string = ""
): string => {
    if (character && character.toUpperCase() === character) {
        return character
    }

    return findFirstCapitalLetter(string.substring(1), string[0])
}

console.log(findFirstCapitalLetter("Abacate"))
console.log(findFirstCapitalLetter("abaCate"))
console.log(findFirstCapitalLetter("abaCatE"))
console.log(findFirstCapitalLetter("abacatE"))


// ---------- DESAFIO 7 ----------
function power(a: number, b: number): number {
    if (b < 0) {
        return 0; // Erro
    } else if (b === 0) {
        return a;
    } else {
        return a * power(a, b - 1);
    }
}

// A complexidade é O(b).



// ---------- DESAFIO 8 ----------
function allFib(n: number): void {
    for (let i = 0; i < n; i++) {
        console.log(`i: ${fib(i)}`)
    }
}

function fib(n: number): number {
    if (n <= 0) {
        return 0
    } else if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

// A complexidade é O(2^n).
