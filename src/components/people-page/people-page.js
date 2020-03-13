import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        return this.props.children;
    }
}

class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: null
    }

    onItemSelected = (id) => {
        this.setState({ selectedItem: id });
    }

    render() {
        const { selectedItem } = this.state;
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}
            >
                {({ name, gender }) => `${name} ${gender}`}
            </ItemList>
        )

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={selectedItem} />
            </ErrorBoundry>
        )

        return (
            <Row leftElem={itemList} rightElem={personDetails} />
        )
    }
}

export default PeoplePage;