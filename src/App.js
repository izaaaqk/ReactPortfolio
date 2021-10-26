import React, { Component } from 'react';
import Main from './components/main';
import {Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <div>
            <Navbar bg="info" expand="lg">

                <Container>
                    <Navbar.Brand href="#home">Isaac Aguirre</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="aboutme">About me</Nav.Link>
                            <Nav.Link href="resume">Resume</Nav.Link>
                            <Nav.Link href="contactme">Contact</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="projects">All Projects</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://izaaaqk.github.io/WeatherBeatsProject1/">WeatherBeats</NavDropdown.Item>
                                {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                                {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        <Container>
            <Main/>
        </Container>
            </div>

        );
    }
}

export default App;


