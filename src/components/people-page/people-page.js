import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PersonList, PersonDetails } from '../sw-components';

class PeoplePage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (id) => {
        this.setState({ selectedItem: id });
    }

    render() {
        const { selectedItem } = this.state;
        const personList = (
            <PersonList onItemSelected={this.onItemSelected} />
        )

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails itemId={selectedItem} />
            </ErrorBoundry>
        )

        return (
            <Row leftElem={personList} rightElem={personDetails} />
        )
    }
}

export default PeoplePage;