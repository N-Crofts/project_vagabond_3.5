import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import AllCities from './components/AllCities';
import SingleCity from './components/SingleCity';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/cities' component={AllCities} />
          <Route exact path='/cities/:id' component={SingleCity} />
        </Switch>
      </Router>
    )
  }
}

export default App;
