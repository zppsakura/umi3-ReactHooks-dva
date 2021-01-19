import React from 'react';
import styles from './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector } from 'react-redux'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Index = () => {
    const onFinish = (value) => {
      console.log('Success:', value);
    };
    const test = useSelector(state => state.register.test)
    console.log('test222', test)
  
    return (
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        className={styles.register}
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: '请填写姓名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="年龄"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="电话"
          name="phone"
          rules={[{ required: true, message: '请填写电话!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请填写密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="密码确认"
          name="password_check"
          rules={[{ required: true, message: '请确认密码!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default Index;
