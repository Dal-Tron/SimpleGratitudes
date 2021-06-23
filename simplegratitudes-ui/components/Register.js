
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import { useAuth } from 'Context/auth'
import { supabase } from 'Supabase/client';

const Register = ({ closeModal }) => {
  const [form] = Form.useForm();
  const { register, updateUser } = useAuth();

  const onFinish = async (values) => {
    const { email, password, username } = values;
    const { error } = await register({ email, password });

    if (error) {
      alert('Registration error');
    } else {
      const { error } = await updateUser({ username });

      if (error) {
        alert('Username error');
      } else {
        form.resetFields();
        closeModal();
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