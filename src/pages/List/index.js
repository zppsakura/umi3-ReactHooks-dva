import React, { useState } from 'react';
import styles from './index.less';
import { List, Input } from 'antd';
import { useDispatch } from 'react-redux';

const { Search } = Input;

const Index = () => {
  const dispatch = useDispatch();
  const [isEdit, handleChangeIsEdit] = useState(false);
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  console.log(123)    
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
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {isEdit ? (
              <div className={styles.editBox}>
                <Input value={item}></Input>
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
                    onClick={() => dispatch({ type: 'list/delete' })}
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
