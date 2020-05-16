import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '5e68dbfd-7f59-406c-8c65-71f92da248b4'
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};
export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
};