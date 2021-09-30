import React from 'react';
import Card  from 'react-bootstrap/Card'
import SearchBar from './../components/searchbar'
import SearchResults from './../components/searchresult'

function Searchtemp () {

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