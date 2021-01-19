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
    }
};
