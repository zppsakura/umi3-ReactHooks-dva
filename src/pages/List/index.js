import React, { useState, useEffect, useMemo } from 'react';
import styles from './index.less';
import { List, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { Search } = Input;

const Index = () => {
  const dispatch = useDispatch();
  const [todoLists, getLists] = useState([]); // state中的值不能直接更改

  useEffect(() => {
    dispatch({ type: 'list/getLists' }).then(lists => {
        if (lists && lists.length > 0) {
            const newLists = [];
            lists.map(item => {
                newLists.push({
                    title: item.title,
                    isEdit: false,
                });
                return newLists;
            });
            getLists(newLists);
        }
    });
  }, []);

  // 获取dva中models中的数据
  const lists = useSelector(state => state.list.todoLists);

  // 监听lists的变化，即只有当添加或删除使得数据项变了才走进下面的钩子中
  useMemo(()=>{
    const newLists = [];
    if (lists && lists.length > 0) {
        lists.map(item => {
            newLists.push({
                title: item.title,
                isEdit: false,
            });
            return newLists;
        });
    }
    getLists(newLists);
  }, [lists]);


  function handleChangeIsEdit(info, state){
      // 深拷贝一个新的数组用于遍历修改值；若直接遍历todolists并更改，将不生效。
      const list = JSON.parse(JSON.stringify(todoLists));
      list.map(item => {
          if (item.title === info.title) {
              item.isEdit = state;
          } else {
              item.isEdit = false;
          }
          return list;
      });
      getLists(list);
  };

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
        dataSource={todoLists}
        renderItem={(item) => (
          <List.Item>
            {item.isEdit ? (
              <div className={styles.editBox}>
                <Input value={item.title} />
                <div className={styles.opt}>
                  <span
                    className={styles.delete}
                    onClick={() => {
                      handleChangeIsEdit(item, false);
                    }}
                  >
                    取消
                  </span>
                  <span
                    className={styles.edit}
                    onClick={() => {
                      handleChangeIsEdit(item, false);
                    }}
                  >
                    确定
                  </span>
                </div>
              </div>
            ) : (
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
