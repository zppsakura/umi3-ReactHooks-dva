import React from 'react';
import styles from './index.less';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Index = () => {
  const dispatch = useDispatch();

  const onFinish = (value) => {
    dispatch({ type: 'user/register', payload: { ...value } });
  };
  return (
    <div className={styles.registerContent}>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        className={styles.register}
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '请填写姓名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="年龄" name="age">
          <Input />
        </Form.Item>

        <Form.Item
          label="电话"
          name="phone"
          rules={[
            { required: true, message: '请填写电话!' },
            { pattern: /^1\d{10}$/, message: '电话格式错误!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请填写密码!' },
            { pattern: /^[a-zA-Z_0-9]{6,32}$/, message: '密码格式错误!' },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="密码确认"
          name="password_check"
          rules={[
            { required: true, message: '请确认密码!' },
            { pattern: /^[a-zA-Z_0-9]{6,32}$/, message: '密码格式错误!' },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
