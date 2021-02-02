import { getLists, listDelete, listAdd } from '../services/List';
import { Message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'list',
  state: {
      todoLists: []
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
    *getLists(_, { call, put }) {
      const user = sessionStorage.getItem('userInfo');
      if (user) {
        const response = yield call(getLists);
        switch(response.code) {
            case 0:
                yield put({
                    type: 'overrideStateProps',
                    payload: {
                        todoLists: response.data,
                    },
                });
                break;
            default:
                Message.error('列表获取失败');
                break;
        }  
      } else {
        Message.error('您还未登录，请先登录！');
        history.push('/login');
      }
    },
    *listAdd({ payload }, { call, put }) {
        const response = yield call(listAdd, payload);
        if (response.code === 0) {
            Message.success(response.msg);
            yield put({
                type: 'getLists',
            });
            return;
        }
        Message.error(response.msg);
    },
    *delete({ payload }, { call, put }) {
        const response = yield call(listDelete, payload);
        if (response.code === 0) {
            Message.success(response.msg);
            yield put({
                type: 'getLists',
            });
            return;
        }
        Message.error('删除失败！');
    }
  },
};
