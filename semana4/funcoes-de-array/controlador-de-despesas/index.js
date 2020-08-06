let arrayDeDespesas = []

function armazenaDespesa() {
    const inputValor = document.getElementById("valor-despesa")
    const inputTipo = document.getElementById("tipo-despesa")
    const inputDescricao = document.getElementById("descricao-despesa")

    if (inputValor.value !== "" && inputTipo.value !=="" && inputDescricao.value !== "") {
        const despesa = {
            valor: Number(inputValor.value),
            tipo: inputTipo.value,
            descricao: inputDescricao.value
        }
        console.log(despesa)
    
        arrayDeDespesas.push(despesa)
        console.log(arrayDeDespesas)
    
        addDespesa.innerHTML = ""
        arrayDeDespesas.forEach(adicionarDespesa)
    
        inputValor.value = ""
        inputTipo.value = ""
        inputDescricao.value = ""
        
    } else {
        alert("Todos os campos são obrigatórios. Digite um valor válido!") 
    }
}

const addDespesa = document.getElementById("lista-despesas-detalhada")
const adicionarDespesa = (despesa, index, array) => {
    addDespesa.innerHTML += `<span>${despesa.valor}</span> <span>${despesa.tipo}</span> <span>${despesa.descricao}</span> <br>`
}

