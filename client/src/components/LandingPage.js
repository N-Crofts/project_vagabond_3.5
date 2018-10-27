import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Crunk Till We Die!</h1>
        <Link to='/cities'>Crunk and Die in these Cities!</Link>
      </div>
    )
  }
}
