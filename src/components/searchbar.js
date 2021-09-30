import React from 'react';
import {FormControl, FormGroup, Button, InputGroup} from 'react-bootstrap'


function SearchBar () {
   
    
    return (
        <div>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search by title, author, or ISBN"
                aria-label="book-search"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
        </InputGroup>
      </div>
    )
}

export default SearchBar;