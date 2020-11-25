import React from 'react';
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useForm } from '../../hooks/useForm'
import { createTrip } from '../../services/createTrip'
import Title from '../../components/Title/Title'
import { Container, FormContainer, Input, Select, Button } from './styled';

function CreateTripPage() {

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

    <Container>
      <Title title={"Adicione uma viagem"} />
      <FormContainer onSubmit={handleSubmit}>
        
        <Input 
          placeholder={"Nome"}
          value={form.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú ]{5,}"}
          title="Deve conter no mínimo 5 letras!"
          required
        />
        

        <Select 
          value={form.planet}        
          name="planet"
          onChange={handleInputChange}
          type="text"
          required
        >
          <option disabled >Planetas</option>
          {planets.map((planet) => {
            return (
            <option value={planet} key={planet}>{planet}</option>
            )
          })}
        </Select>

        <Input  
          placeholder={"Data"}
          value={form.date}
          name="date"
          onChange={handleInputChange}
          type="date"
          min={new Date().toISOString().split("T")[0]}
          required
        />

        <Input  
          placeholder={"Descrição"}
          value={form.description}
          name="description"
          onChange={handleInputChange}
          type="text"
          pattern={"[A-Za-zÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑáàâãéèêíïóôõöúçñ0-9 ]{30,}"}
          title="Deve conter no mínimo 30 letras!"
          required
        />

        <Input  
          placeholder={"Duração (dias)"}
          value={form.durationInDays}
          name="durationInDays"
          onChange={handleInputChange}
          type="number"
          min={50}
          required
        />
        <Button type={"submit"} > ADICIONAR </Button>
      </FormContainer >
    </Container>
  );
}

export default CreateTripPage;