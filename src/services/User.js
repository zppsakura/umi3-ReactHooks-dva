import request from '../utils/request';

export async function register(params) {
    return request('/register', {
        method: 'POST',
        data: params,
    });
}

export async function login(params) {
    return request('/login', {
        method: 'POST',
        data: params,
    });
}

