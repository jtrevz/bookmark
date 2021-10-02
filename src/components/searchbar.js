import React, {useState} from 'react';
import {FormControl, FormGroup, Button, InputGroup, ListGroup, Row, Container, Col } from 'react-bootstrap'
import BookAPI from './../utils/BookAPI'


function SearchBar () {
    const [books, setBooks] = useState([])
    const [input, setInput] = useState([])

   const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue)

        BookAPI.search(input + 'maxResults=10')
        .then(res => {
            setBooks(res.data.items)
            // console.log(books[0]);
        })
    }

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
                        {/* {books ==! undefined ? */}
                            <ListGroup>
                            {books && books.map(book => (
                            <ListGroup.Item>{book.volumeInfo.title}</ListGroup.Item> 
                            ))}
                            </ListGroup>
                            {/* :
                            <div></div>
                    } */}
                </Col>
            </Row>
            </Container>
        </InputGroup>
      </div>
    )
}

export default SearchBar;