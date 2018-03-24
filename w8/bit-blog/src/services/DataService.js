import {url} from '../shared/constants'
import axios from 'axios'
import Post from '../entities/Post'
import SinglePost from '../entities/SinglePost'

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
}

const data = new DataService()

export default data