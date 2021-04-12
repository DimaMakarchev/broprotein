import axios, {AxiosRequestConfig} from "axios";


const init = axios.create({
    withCredentials: true,
    // baseURL: 'http://jsonplaceholder.typicode.com/users/1',
    // baseURL: 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8',
    baseURL: 'http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5',

});

export enum ResultCodeEnum {
    SUCCESS = 1,
    ERROR = 0,
}


type TypeGet = {
    data: {
        id: number,
        name: string
    }
}


export const requestApiUserForLogger = {
    getReq(url?: string, config?: AxiosRequestConfig) {
        return init.get<TypeGet>(<string>url, config);
        // return init.get<TypeGet>(url, config );
    },
    getReqPage(page?: number) {
        return  axios.get(
            // baseURL: 'http://jsonplaceholder.typicode.com/users/1',
            // baseURL: 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8',
             `http://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,

        );
        // return init.get<TypeGet>(url, config );
    },
    getReqServeBR() {
        return  axios.get(
            // baseURL: 'http://jsonplaceholder.typicode.com/users/1',
            // baseURL: 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8',
             `http://localhost:8456/`,

        );
        // return init.get<TypeGet>(url, config );
    },
};
