// EXERCÍCIO
// function adicionarTarefa() {
//     const inputTarefa = document.getElementById("tarefa")
//     let valor = inputTarefa.value
//     //console.log(valor)
    
//     const seletorDia = document.getElementById("dias-semana")
//     let diaDaSemana = seletorDia.value
//     //console.log(diaDaSemana)

//     const tarefasDia = document.getElementById(`${diaDaSemana}`)
//     tarefasDia.innerHTML += `<p>${valor}</p>`
//     inputTarefa.value = ""
// }


// DESAFIO
function adicionarTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    let valor = inputTarefa.value
    //console.log(valor)
    
    const seletorDia = document.getElementById("dias-semana")
    let diaDaSemana = seletorDia.value
    //console.log(diaDaSemana)

    if (valor !== "") {
        const tarefasDia = document.getElementById(`${diaDaSemana}`)
        tarefasDia.innerHTML += `<p>${valor}</p>`
        inputTarefa.value = ""
    } else {
        alert("Digite uma tarefa.") //desafio 1
    }
}
