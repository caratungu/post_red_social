import axios from 'axios';

export const getComments = async () => {
    return await axios.get('http://127.0.0.1:8000/comments/comments/')
}

export const createComment = async (comment: any) => {
    return await axios.post('http://127.0.0.1:8000/comments/comments/', comment)
}