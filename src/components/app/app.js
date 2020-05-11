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
import SwapiServiceDump from '../../services/swapi-service-dumb';
import PlanetPage from '../planet-page';

class App extends Component {  

  state = {
    randomPlanetToggled: true,
    hasError: false,
    swapiService: new SwapiService()
  }

  onServiceChange = (e) => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? SwapiServiceDump : SwapiService;
      return { swapiService: new Service() };
    });
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
    const randomPlanet = randomPlanetToggled ? <RandomPlanet updateInterval={50000} /> : null;

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div>
          <Header onServiceChange={this.onServiceChange}/>
          <div className="container">
            {randomPlanet}
            <div className={`toggle-container ${(!randomPlanetToggled) ? 'toggle-container__toggled' : ''}`}>
              <button type="button" className="btn btn-warning" onClick={this.planetToggle}>Planet toggle</button>
              <ErrorButton />
            </div>
            <PeoplePage />
            <StarshipPage />
            <PlanetPage />
          </div>
        </div>
      </SwapiServiceProvider>
    )
  }
}
  
export default App;