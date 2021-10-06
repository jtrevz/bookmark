import React, {useState, useEffect} from 'react';
import {Container, Navbar}  from 'react-bootstrap'
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
            <Navbar className='navbar'>
                <Container>
                    <Navbar.Brand>
                        <img
                        alt="bookmark logo"
                        src= {smallLogo}
                        className='logo-img'
                        />
                    </Navbar.Brand>
                    <SearchBar/>
                </Container>
            </Navbar>
            </div>
            <div>
                <SearchResults/>
            </div>
        </div>
    )
}

export default Searchtemp;