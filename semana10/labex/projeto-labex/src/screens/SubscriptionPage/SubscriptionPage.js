import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/goToPages';
import { baseUrl } from '../../constants/axiosConstants'
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { Container, H2, Form } from './styled'


function SubscriptionPage() {
  const history = useHistory();

  const [ trips, setTrips] = useRequestData(`${baseUrl}/trips`, [])
  
  useChangePageTitle("LABEX - Inscrição")

  const { form, onChange, resetState } = useForm({
    name: "",
    age: "",
    profession: "",
    country: "",
    motivation: "",
    tripName: "", //?
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

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
            pattern="[A-Za-z]{3,}"
            title="Deve conter no mínimo 3 letras!"
            required
          />

          <input 
            placeholder={"Idade"}
            value={form.age}
            name="age"
            onChange={handleInputChange}
            type="number"
            min="18"
            required
          />

          <input 
            placeholder={"Profissão"}
            value={form.profession}
            name="profession"
            onChange={handleInputChange}
            type="text"
            pattern="[A-Za-z]{10,}"
            title="Deve conter no mínimo 10 letras!"
            required
          />

          <select>
            <option>País</option>            
          </select>

          <select>
            <option>Trips</option>
            {trips.map((trip) => {
              return (
              <option  > {trip.name} - {trip.planet} </option>
              )
            })}
          </select>

          <textarea 
            placeholder={"Motivação"} 
            value={form.motivation}
            name="motivation"
            onChange={handleInputChange}
            type="text"
            pattern="[A-Za-z0-9]{30,}"
            title="Deve conter no mínimo 30 caracteres!"
            required
          />


          <button>ENVIAR</button>
      </Form>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </Container>
  );
}

export default SubscriptionPage;