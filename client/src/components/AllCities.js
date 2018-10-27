import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class AllCities extends Component {
    state = {
        cities: []
    }

    async componentDidMount() {
        await this.fetchCities()
    }

    fetchCities = async () => { 
        const response = await axios.get('/api/cities')
        this.setState({ cities: response.data })
    }

    render() {
        const cityContent = this.state.cities.map((city, i) => {
            return (
                <div key={i}>
                    <Link to={`/cities/${city.id}`}>{city.name}</Link>
                </div>
            )
        })
        return (
            <div>{cityContent}</div>
        )

    
  }
}
