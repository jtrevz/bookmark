import React, {useState, useEffect} from 'react';
import {Container, Nav, Navbar, NavDropdown}  from 'react-bootstrap'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/searchresult'
import smallLogo from './../components/img/textLogo.svg'
import './styles/SearchTemp.css'


function Searchtemp () {
    const [books, setBooks] = useState([])
    const [input, setInput] = useState([])

    // function handleInput(e) {
    //     const 
    // }

    return (
        <div>
            <div>
            <Navbar 
                className='navbar'
                collapseOnSelect expand="md"
            >
                <Container>
                    <Navbar.Brand>
                        <img
                        alt="bookmark logo"
                        src= {smallLogo}
                        className='logo-img'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='navLink'>Home</Nav.Link>
                            <Nav.Link className='navLink'>Favorites</Nav.Link>
                            <Nav.Link className='navLink'>Genres</Nav.Link>
                        </Nav>
                        <Nav>
                            <SearchBar/>
                            <NavDropdown 
                                title='jtrevizo'>
                                <NavDropdown.Item>My Profile</NavDropdown.Item>
                                <NavDropdown.Item>Community</NavDropdown.Item>
                                <NavDropdown.Item>Discussions</NavDropdown.Item>
                                <NavDropdown.Item>Messages</NavDropdown.Item>
                                <NavDropdown.Item>Settings</NavDropdown.Item>
                                <NavDropdown.Item>Sign out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                {/* <SearchResults/> */}
            </div>
        </div>
    )
}

export default Searchtemp;