import React from 'react';
import { render, fireEvent, wait, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom/extend-expect'

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
  const {getByTestId, getByText} = render(<App/>)
  const select = getByTestId("select");
  expect(select).toBeInTheDocument()

  userEvent.selectOptions(select, getByText("Segunda-feira"));
  expect(select).toHaveValue("segunda");
})