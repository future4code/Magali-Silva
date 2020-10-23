// a) A entrada é um array de números e a saída é um objeto contendo a média e o maior e menor número

const array = [1, 2, 3]

type estatistica = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): estatistica {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} 

console.log(obterEstatisticas(array))

// b) Além do array de entrada e do obejto de saída, as variáveis que compõe essa função são  "numerosOrdenados" e "soma", com tipagem array de números e número, respectivamente

// c) 
type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => estatistica
}

