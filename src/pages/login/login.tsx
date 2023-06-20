import React from 'react';
import { PageHeader, Content } from '@neogrid/design-system';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    if (values.user === 'admin' && values.password === '123456') {
      localStorage.setItem('is-authenticate', 'true');
      console.log({ values });
      localStorage.setItem('item-selected', 'home');
      navigate('/');
    }
  };

  return (
    <>
      <PageHeader title="Login" />

      <Content className="contant-page">
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="User"
            name="user"
            rules={[{ required: true, message: 'Please input your user!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};
