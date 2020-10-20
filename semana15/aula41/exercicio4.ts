// a) Para gerar um arquivo .js faria "tsc exercicio4.ts" no terminal

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Sim, o processo seria diferente: "tsc ./src/exercicio4.ts"
// c) Sim, usando o comando tsc, que transpila todos os arquivos com extensão .ts
// d) Algumas configurações foram alteradas, tais como: target, sourceMap, outDir, rootDir, removeComments, noImplicitAny