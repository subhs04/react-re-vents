import logo from './logo.svg';
import './app/layout/styles.css';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from './components/events/eventsDashboard/EventDashboard';
import NavBar from './components/nav/NavBar';
import { Fragment } from 'react';
import { useState } from 'react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectEvent, setSelectEvent] = useState(null);

  function handleSelectedEvent(event) {
    console.log('In handleSelectedEvent',event)
    setSelectEvent(event)
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectEvent(null)
    setFormOpen(true);
  }

  return (
    <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard 
          formOpen={formOpen}
          setFormOpen={setFormOpen} 
          selectEvent={handleSelectedEvent} 
          selectedEvent={selectEvent} />
      </Container>
    </Fragment>
  );
}

export default App;
