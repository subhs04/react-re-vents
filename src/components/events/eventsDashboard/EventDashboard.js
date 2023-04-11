import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';

function EventDashboard(props) {
    return (
        <div>
            <Grid >
                <Grid.Column width={10}>
                    <EventList/>
                </Grid.Column>
                <Grid.Column width={6}>
                     <EventList/>
                </Grid.Column>

            </Grid>
 
        </div>
    );
}

export default EventDashboard;