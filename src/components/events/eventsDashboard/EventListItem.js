import React from 'react';
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';


const EventListItem = () => {
    return (
        <div>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' circular src='/assets/user.png' />
                            <Item.Content>
                                <Item.Header content='Event Title' />
                                <Item.Description>Hosted by Subhs </Item.Description>

                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name='clock' />Date
                        <Icon name='marker' />Venue
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        <EventListAttendee />
                        <EventListAttendee />
                        <EventListAttendee />
                        <EventListAttendee />
                    </List>
                </Segment>
                <Segment clearing>
                    <div>Event Description</div>
                    <Button color='teal' floated='right' content='view' />
                </Segment>
            </Segment.Group>
        </div>
    );
};

export default EventListItem;