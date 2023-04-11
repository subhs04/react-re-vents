import React from 'react';
import { List,Image } from 'semantic-ui-react';

const EventListAttendee = ({event}) => {
    return (
        <List.Item >
            <Image size='mini' circular src={event.photoURL} />
        </List.Item>
    );
};

export default EventListAttendee;