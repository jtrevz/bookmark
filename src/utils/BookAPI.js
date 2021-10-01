import axios from 'axios';


const apiKey='AIzaSyCuNvw13X3zXVIV2k8eSU0BYTMFU3kYyB0'
const searchURL = 'https://www.googleapis.com/books/v1/volumes?q='



const BookAPI = {
    search : function(input) {
        return axios.get(searchURL + input + "&key" + apiKey)
    }
}

export default BookAPI;