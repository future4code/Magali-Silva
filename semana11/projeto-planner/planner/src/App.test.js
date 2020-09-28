import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

axios.get = jest.fn().mockResolvedValue({
  data: []
})
axios.post = jest.fn().mockResolvedValue({})
axios.delete = jest.fn().mockResolvedValue()


test("primeira renderização bate na requisição e mostra as listas de tarefas",
async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        text: "tarefa teste x",
        day: "domingo"
      },
      {
        text: "tarefa teste y",
        day: "sabado"
      },
    ]
  })

  const { findAllByTestId } = render(<App/>)
  const tasks = await findAllByTestId("task-text")

  expect(axios.get).toHaveBeenCalled()
  expect(tasks).toHaveLength(2)
  await wait()
})

test("verifica renderização e funcionamento do input", () => {
  const {getByPlaceholderText} = render(<App/>)
  const input = getByPlaceholderText("Digite a tarefa");
  expect(input).toBeInTheDocument()

  userEvent.type(input, "Nova tarefa teste");
  expect(input).toHaveValue("Nova tarefa teste");
})

test("verifica renderização do botão e se bate na api quanto clicado", () => {
  const {getByText} = render(<App/>)
  const button = getByText("Criar");
  expect(button).toBeInTheDocument()

  axios.post = jest.fn().mockResolvedValue({})
  
  fireEvent.click(button)

  expect(axios.post).toHaveBeenCalled()
})

test("verifica renderização e funcionamento do dropdown", () => {
  const {getByTestId} = render(<App/>)
  const select = getByTestId("select");
  expect(select).toBeInTheDocument()

  userEvent.selectOptions(getByTestId("select"), ["segunda"])
  expect(getByTestId("segunda").selected).toBe(true)
})

test("verifica criação de uma tarefa", async () => {
  axios.post = jest.fn().mockResolvedValue()
  axios.get = jest.fn().mockResolvedValue({data: []})

  const {getByPlaceholderText, getByText, getByTestId} = render(<App/>)

  const input = getByPlaceholderText("Digite a tarefa");
  const button = getByText("Criar");
  const select = getByTestId("select");
  
  await userEvent.type(input, "teste criação tarefa");
  userEvent.selectOptions(select, ["quinta"])
  userEvent.click(button)

  await expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-magali-silva", {
    text:"teste criação tarefa",
    day: "quinta"
  })

  await expect(axios.get).toHaveBeenCalledTimes(2) // teste falha pq no código de produção o get foi chamado apenas uma vez. a atualização da página ao criar a nova tarefa foi feita de outra forma.
})

test("verifica renderização e funcionamento do botão de apagar tarefa", async () => {  
  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        id: "1994",
        text: "tarefa teste 'delete'",
        day: "domingo"
      }
    ]
  })
  
  axios.delete = jest.fn().mockResolvedValue()

  const {findByText, getByText, queryByText} = render(<App/>)

  const task = await findByText("tarefa teste 'delete'")
  expect(task).toBeInTheDocument()

  const deleteButton = getByText("X");
  expect(deleteButton).toBeInTheDocument()

  userEvent.click(deleteButton)
  expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-magali-silva/1994")

  await wait(() => {
    expect(axios.get).toHaveBeenCalledTimes(2) // teste falha pq no código de produção o get foi chamado apenas uma vez. a atualização da página ao deletar a tarefa foi feita de outra forma.
  })
})