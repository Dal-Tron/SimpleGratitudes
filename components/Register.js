import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

import { useAuth } from 'Context/auth'

const Register = ({ closeModal }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { register, updateUser } = useAuth();

  const onFinish = async (values) => {
    const { email, password, username } = values;
    const { error, user } = await register({ email, password });

    if (error) {
      notification.open({
        message: error.message,
        type: 'error',
        duration: 2,
      });
    } else {
      const { error } = await updateUser({ username });

      if (error) {
        notification.open({
          message: error.message,
          type: 'error',
          duration: 2,
        });
      } else {
        form.resetFields();
        closeModal();

        router.push(`/${user?.user_metadata?.username}`);
      }
    }
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Register;