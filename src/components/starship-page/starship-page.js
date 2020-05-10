import React from 'react';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components';

class StarshipPage extends PeoplePage {
    render() {
        const { selectedItem } = this.state;
        const starshipList = (
            <StarshipList onItemSelected={this.onItemSelected} />
        )

        const starshipDetails = (
            <ErrorBoundry>
                <StarshipDetails itemId={selectedItem} />
            </ErrorBoundry>
        )

        return (
            <Row leftElem={starshipList} rightElem={starshipDetails} />
        )
    }
}

export default StarshipPage;