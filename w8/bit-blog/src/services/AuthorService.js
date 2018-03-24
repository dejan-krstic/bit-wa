import {Author, Name, Address, Company} from '../entities/Author'
import axios from 'axios'

class AuthorService {
     async getData(url, imageUrl) {
        const response = await axios.all([axios.get(`${url}users`), axios.get(`${imageUrl}`)])
        return response[0].data.map((e, i) => new Author(e.id, response[1].data.results[i].picture.large, new Name(e.name, e.username, e.email, e.phone), new Address(e.address.street, e.address.city, e.address.zipcode, e.address.geo.lat, e.address.geo.lng), new Company(e.company.name, e.company.catchPhrase)))
    }
}

const authorService = new AuthorService();

export default authorService; 
