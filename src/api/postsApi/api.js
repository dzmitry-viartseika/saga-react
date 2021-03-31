import { CURRENT_SERVER } from '../domain';
const axios = require('axios');

export default {
    getPostsList() {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get('posts?_limit=5');
    },
};