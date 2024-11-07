import axios from 'axios';

export const getPost = async () => {
    return await axios.get('http://127.0.0.1:8000/comments/posts/')
}