import { register, login } from '../services/User';
import { Message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'user',
  state: {
    test: 'aaabbbccc',
    test1: 133,
    test2: 233,
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
    *register({ payload }, { call }) {
      const params = { ...payload };
      const response = yield call(register, params);
      if (response.code === 0) {
        Message.success(response.msg);
        history.push('/login');
      } else {
        Message.error('注册失败');
      }
    },

    *login({ payload }, { call }) {
        const params = { ...payload };
        const response = yield call(login, params);
        if (response.code === 0) {
          Message.success(response.msg);
          history.push('/list');
        } else {
          Message.error(response.msg);
        }
    },
  },
};
