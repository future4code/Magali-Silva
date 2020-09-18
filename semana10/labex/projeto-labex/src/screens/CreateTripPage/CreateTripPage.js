import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, goBack } from '../../router/goToPages'
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useForm } from '../../hooks/useForm'
import { createTrip } from '../../services/createTrip'

function CreateTripPage() {
  const history = useHistory();

  useChangePageTitle("LABEX - Adicionar Viagem")
  useProtectPage()
  
  const planets = ["Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão"]

  const { form, onChange, resetState } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTrip(form.name, form.planet, form.date, form.description, form.durationInDays)

    resetState()
  }

  return (

    <div>
      <p>ADICIONE UMA VIAGEM</p>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder={"Nome"}
          value={form.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú ]{5,}"}
          title="Deve conter no mínimo 5 letras!"
          required
        />

        <select 
          value={form.planet}        
          name="planet"
          onChange={handleInputChange}
          type="text"
          required
        >
          {planets.map((planet) => {
            return (
            <option value={planet} key={planet}>{planet}</option>
            )
          })}
        </select>

        {/* alterar formato da data */}
        <input 
          placeholder={"Data"}
          value={form.date}
          name="date"
          onChange={handleInputChange}
          type="date"
          min={new Date().toISOString().split("T")[0]}
          required
        />

        <input 
          placeholder={"Descrição"}
          value={form.description}
          name="description"
          onChange={handleInputChange}
          type="text"
          pattern={"[A-Za-zÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑáàâãéèêíïóôõöúçñ0-9 ]{30,}"}
          title="Deve conter no mínimo 30 letras!"
          required
        />

        <input 
          placeholder={"Duração (dias)"}
          value={form.durationInDays}
          name="durationInDays"
          onChange={handleInputChange}
          type="number"
          min={50}
          required
        />
        
        <button type={"submit"} > ADICIONAR </button>
      </form>
      <button onClick={() => goBack(history)} >VOLTAR</button>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default CreateTripPage;