import request from '../utils/request';

export async function getLists() {
    return request('/getLists', {
        method: 'GET',
    });
}

export async function listAdd(params) {
    return request('/listAdd', {
        method: 'GET',
        params,
    });
}

export async function listDelete(params) {
    return request('/listDelete', {
        method: 'GET',
        params,
    });
}

