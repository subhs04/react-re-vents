import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';
import { useState } from 'react';

function EventDashboard({ formOpen, setFormOpen, selectedEvent, selectEvent }) {
    const [events, setEvents] = useState(sampleData);

    function handleCreateEvent(event) {
        console.log('values is', event)
        setEvents([...events, event])
    }

    function handleDeleteEvent(deleteEvent) {
        console.log('in handleDeleteEvent')
        setEvents(events.filter(e=>e.id !== deleteEvent.id));
    }


    function handleUpdateEvent(updatedEvent) {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e))
        selectEvent(null)
        setFormOpen(true);
    }
    return (
        <div>
            <Grid >
                <Grid.Column width={10}>
                    <EventList
                        events={events}
                        selectEvent={selectEvent}
                        deleteEvent={handleDeleteEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                    {formOpen &&
                        <EventForm
                            setFormOpen={setFormOpen}
                            setEvents={setEvents}
                            selectedEvent={selectedEvent}
                            createEvent={handleCreateEvent}
                            updateEvent={handleUpdateEvent}
                            key={selectedEvent ? selectedEvent.id : null} />}
                </Grid.Column>

            </Grid>

        </div>
    );
}

export default EventDashboard;