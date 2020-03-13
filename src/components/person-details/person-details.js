import React, { Component, Fragment } from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../../components/spinner';
import ErrorButton from '../error-button';

class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {},
        loading: false
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (personId) {
            this.setState({loading: true})
            this.swapiService
                .getPerson(personId)
                .then((person) => {
                    this.setState({ person, loading: false });
                });
        }
    }

    render() {
        if (!this.state.person.id && !this.props.personId) {
            return <span>Select a person from list</span>
        }

        const { person: { id, name, gender, birthYear, eyeColor }, loading } = this.state;

        return (
            <div className="card mb-3">
                {(loading) ? <Spinner /> : (
                    <Fragment>
                        <div className="card-header">{name}</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img className="img-fluid rounded" alt="planet" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                                </div>
                                <div className="col-8">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="term">Gender</span>
                                            <span>{gender}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span className="term">Birth year</span>
                                            <span>{birthYear}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span className="term">Eye color</span>
                                            <span>{eyeColor}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="container">
                                    <ErrorButton />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </div>
        )
    }
};

export default PersonDetails;