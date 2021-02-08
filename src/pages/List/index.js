import React, { useEffect } from 'react';
import styles from './index.less';
import { List, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { Search } = Input;

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'list/getLists' });
  }, []);

  const todoLists = useSelector(state => state.list.todoLists);
  const lists = [];
  if (todoLists && todoLists.length > 0) {
    todoLists.map(item => {
        lists.push({
            title: item.title
        });
        return lists;
    });
  }
  const onSearch = (value) => {
    dispatch({ type: 'list/listAdd', payload: { title: value } });
  };
      
  return (
    <div className={styles.listContent}>
      <h1>ToDo List</h1>
        <Search
        placeholder="请输入待办事项"
        allowClear
        enterButton="添加"
        size="large"
        style={{ marginBottom: 20 }}
        onSearch={onSearch}
      />
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={lists}
        renderItem={(item) => (
          <List.Item>
              <div style={{ width: '100%' }}>
                {item.title}
                <span className={styles.opt}>
                  <span
                    className={styles.delete}
                    onClick={() => dispatch({ 
                        type: 'list/delete', 
                        payload: { title: item.title }  
                    })}
                  >
                    删除
                  </span>
                </span>
              </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Index;
