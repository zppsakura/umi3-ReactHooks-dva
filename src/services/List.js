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
    console.log('params', params);
    return request(`/listDelete/${params.id}`, {
        method: 'DELETE'
    });
}

export async function listEdit(params) {
    return request(`/listEdit/${params.id}`, {
        method: 'PUT',
        data: {title: params.title},
    });
}

