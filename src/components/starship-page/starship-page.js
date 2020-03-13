import React from 'react';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';

class StarshipPage extends PeoplePage {
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const { selectedItem } = this.state;
        return (
            <div className="row">
                <div className="col">
                    <ItemList
                        onItemSelected={this.onItemSelected}
                        getData={this.swapiService.getAllStarships}
                        renderItem={(item) => `${item.name} ${item.model}`}
                    />
                </div>
                <div className="col">
                    
                </div>
            </div>
        )
    }
}

export default StarshipPage;