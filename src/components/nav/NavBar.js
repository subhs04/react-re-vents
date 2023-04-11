import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

const NavBar = ({setFormOpen}) => {
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item header>
                        <img src='/assets/logo.png' alt='logo' />
                    </Menu.Item>
                    <Menu.Item name='Events'/>
                    <Menu.Item >
                        <Button positive inverted content='Create Event'onClick={()=>setFormOpen(true)}/>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button baisc inverted content='Login'/>
                        <Button baisc inverted content='Register' style={{marginLeft :'0.5em'}}/>
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    );
};

export default NavBar;