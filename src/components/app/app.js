import React, { Component } from 'react';
import './app.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import StarshipPage from '../starship-page';

class App extends Component {

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
    console.log('didCathc');
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
      <div>
        <Header />
        <div className="container">
          {randomPlanet}
          <div className={`toggle-container ${(!randomPlanetToggled) ? 'toggle-container__toggled' : ''}`}>
            <button type="button" className="btn btn-warning" onClick={this.planetToggle}>Planet toggle</button>
            <ErrorButton />
          </div>
          <PeoplePage />
        </div>
      </div>
    )
  }
}
  
export default App;