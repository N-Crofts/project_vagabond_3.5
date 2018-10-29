import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class CityContent extends Component {
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
                <div key={i}>
                    <Link to={`/cities/${city.id}`} > {city.name}</Link>
                    <button onClick={() => this.handleDelete(city.id)}>X</button>
                </div>
            )
        })

        return (
            <div>
                <main class="wrapper">
                    <section class="section parallax bg1">
                        <div class="exploreBanner">
                            EXPLORE THESE CITIES
                        </div>
                    </section>
                    <section class="section static">
                        <ul class="cityList">
                            {citiesContent}
                        </ul>
                    <div class="cityAdd">
                        <form onSubmit={this.handleSubmit}>
                            <input class="enterHere"
                                type='text'
                                name='name'
                                placeholder='add a city'
                                value={this.state.newCity.name}
                                onChange={this.handleChange}
                            />
                            <input type='submit' value='add city'></input>
                        </form>
                        </div>
                        </section>

                    <section class="section parallax bg2">
                        <div class="contactFooter">CONTACT</div>
                    </section>
                </main>
            </div>
        )
    }
}