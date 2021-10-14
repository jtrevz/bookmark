import React, {useState, useEffect} from 'react';
import {Container, Nav, Navbar, NavDropdown, Card} from 'react-bootstrap'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/searchresult'
import smallLogo from './../components/img/textLogo.svg'
import BookAPI from './../utils/BookAPI'
import './styles/SearchTemp.css'
import bookPic from './../components/img/book-thumbnail(pink).png'


function Searchtemp () {
    const [books, setBooks] = useState([])
    const [input, setInput] = useState([])
    const[book, setBook] = useState({})

    async function tempBook () {

        await BookAPI.search('Pride and Prejudice')
        .then(res => setBook(res.data.items[0]))
        .then(console.log(book))
    }

    useEffect (() =>  {
        if(!book){
            tempBook()
        }   
    }, [book])

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
            <div className='content-container'>
                <Container>
                        <Card className='book-card'>
                            <div className='img-fit'>
                                <Card.Img className='bookPic d-flex justify-content-center'src={bookPic} >
                                </Card.Img>
                            </div>
                            <div className='book-content'>
                                <div className='at-box'>
                                    <Card.Title>Pride and Prejudice</Card.Title>
                                    <Card.Text className='author'>
                                        Jane Austen
                                    </Card.Text>
                                </div>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            </div>
                        </Card>
                </Container>
            </div>
        </div>
    )
}

export default Searchtemp;