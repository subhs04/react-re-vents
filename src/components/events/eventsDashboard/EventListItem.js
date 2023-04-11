import React from 'react';
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';


const EventListItem = ({ event ,selectEvent}) => {
    return (
        <div>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header content={event.title} />
                                <Item.Description>Hosted by {event.hostedBy}  </Item.Description>

                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name='clock' />{event.date1}
                        <Icon name='marker' />{event.venue.address}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees.map(
                            attendee => <EventListAttendee  event={attendee} key={attendee.id}/>
                        )}
                    </List>
                </Segment>
                <Segment clearing>
                    <div>{event.desscription} </div>
                    <Button color='teal' floated='right' content='view' onClick={()=>selectEvent(event)} />
                </Segment>
            </Segment.Group>
        </div>
    );
};

export default EventListItem;