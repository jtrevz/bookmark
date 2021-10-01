import React, {useState, useEffect} from 'react';
import Card  from 'react-bootstrap/Card'
import SearchBar from './../components/searchbar'
import SearchResults from './../components/searchresult'

function Searchtemp () {
    const [books, setBooks] = useState([])
    const [input, setInput] = useState([])

    // function handleInput(e) {
    //     const 
    // }

    return (
        <div>
            <div >
            <Card>
                <Card.Body>
                    Search Books Here!
                    <SearchBar/>
                    </Card.Body>
            </Card>
            </div>
            <div>
                <SearchResults/>
            </div>
        </div>
    )
}

export default Searchtemp;