import logo from './logo.svg';
import './app/layout/styles.css';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from './components/events/eventsDashboard/EventDashboard';
import NavBar from './components/nav/NavBar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Container className='main'>
        <EventDashboard/>
      </Container>      
    </Fragment>
  );
}

export default App;
