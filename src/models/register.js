import { register, query } from '../services/User';

export default {
    namespace: 'register',
    state: {
        test: 'aaabbbccc',
        test1: 133,
        test2: 233
    },
    reducers: {
        overrideStateProps(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },

        // 更新某个对象状态的属性
        updateStateProps(state, { payload }) {
            const { name, value } = payload;
            return {
                ...state,
                ...{ [name]: { ...state[name], ...value } },
            };
        },
    },
    effects: {
        *register(_, { put, call }) {
            console.log('aaa')
            const params = {
                name: 'zpp',
                age: 18,
                phone: 123,
                password: '222',
                password_check: '333'
            }
            console.log('register', register);
            const response = yield call(register, params);
            console.log('response', response);
           
        },
        
        *query(_, { put, call }) {
            console.log('query')
            const response = yield call(query);
           
        },
    }
};
