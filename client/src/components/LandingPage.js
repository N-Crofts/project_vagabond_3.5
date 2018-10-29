import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const StyledBg1 = styled.div`
  background-image: url("http://klxpress.com.my/images/rail.jpg");
  filter: blur(2px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
`

const StyledMenu = styled.div`
  background-color: rgba(0,0,0, 0.6);
  border: 0.5px solid #f1f1f1;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 10px;
  padding-bottom: 20px;
  text-align: center;
  h1 {
  font-size: 9.5vw;
  letter-spacing: 1vw;
  color: white;
  font-weight: bold;
  }
  h2 {
  font-size: 4vw;
  color: white;
  font-weight: bold;
  }
`

const StyledStatic = styled.div`
  background-image: url('https://images.unsplash.com/photo-1523411518-b0e44109a06b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b871ac13c2aa23571b82e7dbec98f991&auto=format&fit=crop&w=1051&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
`
const StyledBanner = styled.div`
  font-size: 8vw;
  letter-spacing: 1vw;
  color: black;
  font-weight: bold;
  margin: 20px;

`
const StyledCityList = styled.div`
  margin: 10px;
`
const StyledCityAdd = styled.div`
  position: relative;
  height: 15vh;  
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
cursor: pointer;
font-size: 5.5vw;
margin: 20px;
`


export default class LandingPage extends Component {
  state = {
    cities: [],
    newCity: {
        name: ''
    }
}

componentDidMount = async () => {
    const response = await axios.get('/api/cities')
    this.setState({ cities: response.data })
}

handleChange = (event) => {
    const newCity = { ...this.state.newCity }
    newCity[event.target.name] = event.target.value
    this.setState({ newCity })
}

handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/cities', this.state.newCity)
    const cities = [...this.state.cities]
    cities.push(response.data)
    this.setState({ cities })
}

handleDelete = async (cityId) => {
    const deleteResponse = await axios.delete(`/api/cities/${cityId}`)
    const filteredCities = this.state.cities.filter(city => cityId !== city.id)
    this.setState({ cities: filteredCities })
}
  render() {
    const citiesContent = this.state.cities.map((city, i) => {
      return (
          <StyledCityList key={i}>
              <StyledLink to={`/cities/${city.id}`} > {city.name}</StyledLink>
              <button onClick={() => this.handleDelete(city.id)}>X</button>
          </StyledCityList>
      )
  })

    return (
      <div>
      <main class="wrapper">
      <section class="section parallax bg1">
      <StyledBg1>
        </StyledBg1>
        <StyledMenu>
        <h1>VAGABOND</h1>
        <h2>Log In</h2>
        {/* <StyledLink to='/cities'>Enter Cities</StyledLink> */}
        </StyledMenu>
        </section>
        <section class="section static">
        <StyledStatic>
         
        <StyledBanner class="exploreBanner">
                            EXPLORE
                        </StyledBanner>
                        <StyledCityList class="cityList">
                            {citiesContent}
                        </StyledCityList>
                    <StyledCityAdd class="cityAdd">
                        <form onSubmit={this.handleSubmit}>
                            <input class="enterHere"
                                type='text'
                                name='name'
                                placeholder='City Name'
                                value={this.state.newCity.name}
                                onChange={this.handleChange}
                            />
                            <input type='submit' value='Add'></input>
                        </form>
                        </StyledCityAdd>
                        </StyledStatic>
                        </section>
                        
        </main>
        </div>
    )
  }
}
