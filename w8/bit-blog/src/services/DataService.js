import {url, imageUrl} from '../shared/constants'
import axios from 'axios'
import Post from '../entities/Post'
import SinglePost from '../entities/SinglePost'
import Author from '../entities/Author'
import {Name, Address, Company} from '../entities/SingleAuthor'

class DataService {

    async getPosts() {
        let response = await axios.get(`${url}posts/`);
        response.data.splice(10);
        const postList = response.data.map(post => new Post(post.title, post.body, post.id, post.authorId));
        return postList;
    }

    async getPostById(postId) {
        let response = await axios.get(`${url}posts/${postId}`);
        const postData = response.data;
        response = await axios.get(`${url}users/${postData.userId}`);
        const authorName = response.data.name;
        response = await axios.get(`${url}posts?userId=${postData.userId}`);
        response.data.splice(3);
        const sameAuthorPosts = response.data;
        console.log(sameAuthorPosts);
        
        const singlePost = new SinglePost(postData.title, postData.body, authorName, postData.userId, sameAuthorPosts);
        return singlePost;
    }

    async getAuthors() {
        const response = await axios.get(`${url}users`);
        return response.data.map(author => new Author(author.name, author.id))
    }

    async getAuthorById(authorId) {
        const [authorData, authorImage] = await axios.all([axios.get(`${url}users/${authorId}`), axios.get(`${imageUrl}`)]);
        return {
            name: new Name(authorImage.data.results[0].picture.large, authorData.data.name, authorData.data.username, authorData.data.email, authorData.data.phone),
            address: new Address(authorData.data.address.street, authorData.data.address.city, authorData.data.address.zipcode, authorData.data.address.geo.lat, authorData.data.address.geo.lng),
            company: new Company(authorData.data.company.name, authorData.data.company.catchPhrase)
        }
}}

const data = new DataService()

export default data