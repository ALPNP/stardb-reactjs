import React from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PersonList, PersonDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ match, history }) => {
    const personList = <PersonList onItemSelected={(id) => history.push(id)} />
    const personDetails = (<ErrorBoundry><PersonDetails itemId={match.params.id} /></ErrorBoundry>)

    return <Row leftElem={personList} rightElem={personDetails} />
}

export default withRouter(PeoplePage);