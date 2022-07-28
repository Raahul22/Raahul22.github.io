import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <Navbar className='color-nav' variant="light">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">Create Account</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/login" className="text-decoration-none text-light mx-2">Sign to continue access</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header