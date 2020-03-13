import React, { Component, Fragment } from 'react';
import './random-planet.css';
import SwapiService from './../../services/swapi-service';
import Spinner from './../spinner';
import ErrorIndicator from './../error-indicator';

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        erorr: false,
        request: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(() => {
            if (!this.state.request) {
                this.updatePlanet();
            }
        }, 5000);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false, request: false, error: false});
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
            request: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.setState({request: true});
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);
        const errorIndicator = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="jumbotron random-planet-container">
                {spinner}
                {errorIndicator}
                {content}
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

const PlanetView = ({planet}) => {
    const { population, rotationPeriod, diameter, name, id } = planet;
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid rounded" alt="planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                    </div>
                    <div className="col-8">
                        <h1 className="display-4">{name}</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>{population}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation period</span>
                                <span>{rotationPeriod}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>{diameter}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RandomPlanet;