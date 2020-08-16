import axios from 'axios';

export const list = (user) => {
    return axios.get(`/users/${user}/repos`);
};
