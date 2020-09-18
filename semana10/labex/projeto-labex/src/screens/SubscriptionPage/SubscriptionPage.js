import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, goBack } from '../../router/goToPages';
import { baseUrl } from '../../constants/axiosConstants'
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { Container, H2, Form } from './styled'
import SelectCountry from '../../components/SelectCountry/SelectCountry'
import { applyToTrip } from '../../services/applyToTrip';


function SubscriptionPage() {
  const history = useHistory();

  const [ trips, setTrips] = useRequestData(`${baseUrl}/trips`, [])
  
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
      <H2>Faça sua inscrição</H2>
      <Form onSubmit={handleSubmit}>
          <input 
            placeholder={"Nome"}
            value={form.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú ]{3,}"}
            title="Deve conter no mínimo 3 letras!"
            required
          />

          <input 
            placeholder={"Idade"}
            value={form.age}
            name="age"
            onChange={handleInputChange}
            type="number"
            min={18}
            required
          />

          <input 
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
          
          <select
            value={form.trip}
            name="trip"
            onChange={handleInputChange}
            type="text"
            required
          >
            <option>Trips</option>
            {trips.map((trip) => {
              return (
              <option value={trip.id} key={trip.id}> {trip.name} - {trip.planet} </option>
              )
            })}
          </select>

          <input
            placeholder={"Motivação"} 
            value={form.applicationText}
            name="applicationText"
            onChange={handleInputChange}
            type="text"
            pattern={"[A-Za-zÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑáàâãéèêíïóôõöúçñ0-9 ]{30,}"}
            title="Deve conter no mínimo 30 caracteres!"
            required
          />
      
          <button type={"submit"} >ENVIAR</button>
      </Form>
      <button onClick={() => goBack(history)} >VOLTAR</button>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </Container>
  );
}

export default SubscriptionPage;