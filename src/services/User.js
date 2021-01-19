import request from '../utils/request';

export async function register(params) {
    return request('http://127.0.0.1:7001/register', {
        method: 'POST',
        data: params,
    });
}

export async function query() {
    return request('/api/users');
}

