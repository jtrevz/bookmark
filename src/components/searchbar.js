import React, {useState} from 'react';
import {FormControl, FormGroup, Button, InputGroup, ListGroup, Row, Container, Col } from 'react-bootstrap'
import BookAPI from '../utils/BookAPI'
import './styles/SearchBar.css'

function SearchBar () {
    const [books, setBooks] = useState([])
    const [input, setInput] = useState([])
    const [suggestion, setSuggestion] = useState([])

   const handleInputChange = async  (e) => {
        const inputValue = e.target.value;
        console.log(e.target.value);
        setInput(inputValue)

        if (input.length > 0) {
            BookAPI.search(input)
        .then(res => {
            setSuggestion(res.data.items)
        })}
    }

    const defaultThumbnail = (title)=> {
        return "./img/book-thumbnail(pink).png"
    }

    //BETTER API URL SPECIFICS
    //CHANGE BOOKS INTO SUGGESTION
    //

    // function handleSubmit(e) {

    // }
    
    return (
        <div>
        <InputGroup className="mb-3 ">
            <Container fluid='md'>
            <Row fluid>
                <Col sm={10}>
                    <FormControl
                        // onSubmit={handleSubmit}
                        placeholder="Search by title, author, or ISBN"
                        aria-label="book-search"s
                        type="text"
                        className='search-input'
                        onChange={handleInputChange}
                    />
                </Col>
                <Col sm={2}>
                    <Button
                        className='search-button' 
                        type='submit'>
                        Search
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col sm={{span:10}}>
                            <ListGroup className="suggestion-list">
                            {input && suggestion.map((book, i, key) => (
                            <ListGroup.Item id={i + 1} className='suggestion'>
                                <img 
                                src={(book.volumeInfo.imageLinks !== undefined) ? book.volumeInfo.imageLinks.thumbnail : require('./img/book-thumbnail(pink).png')}
                                className='suggestion-thumbnail'/>
                                {book.volumeInfo.title}</ListGroup.Item> 
                            ))}
                            </ListGroup>
                </Col>
            </Row>
            </Container>
        </InputGroup>
      </div>
    )
}

export default SearchBar;