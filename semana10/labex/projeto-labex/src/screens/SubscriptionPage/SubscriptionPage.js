import React from 'react';
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { applyToTrip } from '../../services/applyToTrip';
import { baseUrl } from '../../constants/axiosConstants'
import SelectCountry from '../../components/SelectCountry/SelectCountry'
import Title from '../../components/Title/Title'
import { Container, Form, Input, Select, Button } from './styled'


function SubscriptionPage() {

  const [ trips ] = useRequestData(`${baseUrl}/trips`, [])
  
  useChangePageTitle("LABEX - Inscrição")

  const { form, onChange, resetState } = useForm({
    
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "", 
    trip: ""
    
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    applyToTrip(form.trip, form.name, form.age, form.applicationText, form.profession, form.country)

    resetState()
  }

  return (
    <Container>
      <Title title={"Faça sua inscrição"} />
      <Form onSubmit={handleSubmit}>
          <Input 
            placeholder={"Nome"}
            value={form.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú ]{3,}"}
            title="Deve conter no mínimo 3 letras!"
            required
          />

          <Input 
            placeholder={"Idade"}
            value={form.age}
            name="age"
            onChange={handleInputChange}
            type="number"
            min={18}
            required
          />

          <Input 
            placeholder={"Profissão"}
            value={form.profession}
            name="profession"
            onChange={handleInputChange}
            type="text"
            pattern={"[A-Za-zÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑáàâãéèêíïóôõöúçñ0-9 ]{10,}"}
            title="Deve conter no mínimo 10 letras!"
            required
          />
          
          <SelectCountry
            value={form.country}
            name="country"
            onChange={handleInputChange}
            type="text"
            required
          />
          
          <Select
            value={form.trip}
            name="trip"
            onChange={handleInputChange}
            type="text"
            required
          >
            <option disabled >Viagens</option>
            {trips.map((trip) => {
              return (
              <option value={trip.id} key={trip.id}> {trip.name} - {trip.planet} </option>
              )
            })}
          </Select>

          <Input
            placeholder={"Motivação"} 
            value={form.applicationText}
            name="applicationText"
            onChange={handleInputChange}
            type="text"
            pattern={"[A-Za-zÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑáàâãéèêíïóôõöúçñ0-9 ]{30,}"}
            title="Deve conter no mínimo 30 caracteres!"
            required
          />
      
          <Button type={"submit"} >ENVIAR</Button>
      </Form>
    </Container>
  );
}

export default SubscriptionPage;