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
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBoundry from '../error-boundry';
import { StarshipDetails } from '../sw-components';
import SecretPage from './../pages/secret-page';
import LoginPage from './../pages/login-page';

class App extends Component {  

  state = {
    randomPlanetToggled: true,
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState(() => {
      return { isLoggedIn: !this.state.isLoggedIn }
    });
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
        <Router>
          <div>
            <Header onServiceChange={this.onServiceChange} />
            <div className="container">
              {randomPlanet}
              <div className={`toggle-container ${(!randomPlanetToggled) ? 'toggle-container__toggled' : ''}`}>
                <button type="button" className="btn btn-warning" onClick={this.planetToggle}>Planet toggle</button>
                <ErrorButton />
              </div>

              <Route className="btn btn-link" path="/" render={() => <h2>Welcome to star DB</h2>} exact />
              <Route path='/peoples/:id?' component={PeoplePage} />
              <Route path='/planets' component={PlanetPage}/>
              <Route path='/starships' exact component={StarshipPage}/>
              <Route path='/starships/:id' render={({ match }) => {
                return (<ErrorBoundry><StarshipDetails itemId={match.params.id} /></ErrorBoundry>)
              }} />

              <Route path='/login' render={() => <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} />} />
              <Route path='/secret' render={() => <SecretPage isLoggedIn={this.state.isLoggedIn}/>} />
            </div>
          </div>
        </Router>
      </SwapiServiceProvider>
    )
  }
}
  
export default App;