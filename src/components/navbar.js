import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function navbar() {

    if (typeof window !== "undefined") {
        require("smooth-scroll")('a[href*="#"]')
    }    

    return (
        <Navbar expand="lg" fixed="top" id="menu-wrap" className="menu-back cbp-af-header" variant="dark">
            <Container>
            <Navbar.Brand href="/#home" className="logo"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
                <Scrollspy items={ ['home', 'about', 'team', 'work', 'services', 'blog', 'contact'] } currentClassName="active" className="slimmenu ml-auto">
                    <Nav.Item as="li">
                        <Link to="/#home" className="nav-link">Home</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/#about" className="nav-link">about</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/#team" className="nav-link">team</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/#work" className="nav-link">the work</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/#services" className="nav-link">services</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/#blog" className="nav-link">blog</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/#contact" className="nav-link">say hello</Link>
                    </Nav.Item>
                </Scrollspy> 
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}