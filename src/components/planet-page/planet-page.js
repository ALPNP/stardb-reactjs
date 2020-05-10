import React from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import PeoplePage from '../people-page';
import { PlanetList, PlanetDetails } from '../sw-components';

class PlanetPage extends PeoplePage {
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