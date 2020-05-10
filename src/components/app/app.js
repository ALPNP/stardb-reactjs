import React, { Component } from 'react';
import './app.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import StarshipPage from '../starship-page';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

class App extends Component {

  swapiService = new SwapiService();

  state = {
    randomPlanetToggled: true,
    hasError: false
  }

  planetToggle = () => {
    this.setState((prev) => {
      return { randomPlanetToggled: !prev.randomPlanetToggled };
    });
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }

    const { randomPlanetToggled } = this.state;
    const randomPlanet = randomPlanetToggled ? <RandomPlanet /> : null;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div>
          <Header />
          <div className="container">
            {randomPlanet}
            <div className={`toggle-container ${(!randomPlanetToggled) ? 'toggle-container__toggled' : ''}`}>
              <button type="button" className="btn btn-warning" onClick={this.planetToggle}>Planet toggle</button>
              <ErrorButton />
            </div>
            <PeoplePage />
            <StarshipPage />
          </div>
        </div>
      </SwapiServiceProvider>
    )
  }
}
  
export default App;