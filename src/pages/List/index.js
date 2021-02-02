import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { List, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { Search } = Input;

const Index = () => {
  const dispatch = useDispatch();
  const [isEdit, handleChangeIsEdit] = useState(false);

  useEffect(() => {
    const query = () =>  dispatch({ type: 'list/getLists' });
    return query;
  }, []);

  const todoLists = useSelector(state => state.list.todoLists);
  const lists = [];
  if (todoLists && todoLists.length > 0) {
    todoLists.map(item => {
        lists.push(item.title);
        return lists;
    });
  }
  
  return (
    <div className={styles.listContent}>
      <h1>ToDo List</h1>
        <Search
        placeholder="请输入待办事项"
        allowClear
        enterButton="添加"
        size="large"
        style={{ marginBottom: 20 }}
        // onSearch={onSearch}
      />
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={lists}
        renderItem={(item) => (
          <List.Item>
            
            {isEdit ? (
              <div className={styles.editBox}>
                <Input value={item} />
                <div className={styles.opt}>
                  <span
                    className={styles.delete}
                    onClick={() => {
                      handleChangeIsEdit(false);
                    }}
                  >
                    取消
                  </span>
                  <span
                    className={styles.edit}
                    onClick={() => {
                      handleChangeIsEdit(false);
                    }}
                  >
                    确定
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ width: '100%' }}>
                {item}
                <span className={styles.opt}>
                  <span
                    className={styles.delete}
                    onClick={() => dispatch({ 
                        type: 'list/delete', 
                        payload: { title: item }  
                    })}
                  >
                    删除
                  </span>
                  <span
                    className={styles.edit}
                    onClick={() => {
                      handleChangeIsEdit(true);
                    }}
                  >
                    编辑
                  </span>
                </span>
              </div>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Index;
