import { createEvent } from '@testing-library/react';
import cuid from 'cuid';
import React, { useState } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';

const EventForm = ({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent }) => {

    function handleSubmit() {
        console.log('handle submit ',values)
        selectedEvent ? updateEvent({...selectedEvent,...values})
            : createEvent({
                ...values, id: cuid(), attendees: [], hostedBy: 'Subhs',
                hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            });
        setFormOpen(false)
    }
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: {
            address: '',
            latLng: null,
        },
        venue: {
            address: '',
            latLng: null,
        },
        date: ''
    }
    const [values, setValues] = useState(initialValues);

    function onChangeValue(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <div>
            <Segment clearing>
                <Header content={selectedEvent ? 'Edit Event' : 'Create New Event'}></Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <input type='text' placeholder='Event Title'
                            name='title' onChange={(e) => onChangeValue(e)} value={values.title} />
                    </Form.Field>
                    <Form.Field>
                        <input type='text' placeholder='Category'
                            name='category' onChange={(e) => onChangeValue(e)} value={values.category} />
                    </Form.Field>
                    <Form.Field>
                        <input type='text' placeholder='Description'
                            name='description' onChange={(e) => onChangeValue(e)} value={values.description} />
                    </Form.Field>
                    <Form.Field>
                        <input type='text' placeholder='Venue'
                            name='venue' onChange={(e) => onChangeValue(e)} value={values.venue.address} />
                    </Form.Field>
                    <Form.Field>
                        <input type='date' placeholder='Date' />
                    </Form.Field>
                    <Button type='Submit' floated='right' positive content='Submit'></Button>
                    <Button type='Submit' floated='right' positive content='Cancel' onClick={() => setFormOpen(false)}></Button>
                </Form>
            </Segment>
        </div>
    );
};

export default EventForm;