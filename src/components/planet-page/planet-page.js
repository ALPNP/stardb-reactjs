import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PlanetList, PlanetDetails } from '../sw-components';

class PlanetPage extends Component {

    state = {
        selectedItem: null
    }

    render() {
        const { selectedItem } = this.state;
        const planetList = (
            <PlanetList onItemSelected={this.onItemSelected} />
        )

        const planetDetails = (
            <ErrorBoundry>
                <PlanetDetails itemId={selectedItem} />
            </ErrorBoundry>
        )

        return (
            <Row leftElem={planetList} rightElem={planetDetails} />
        )
    }
}

export default PlanetPage;