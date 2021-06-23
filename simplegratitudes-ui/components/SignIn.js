import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useAuth } from 'Context/auth';

const SignIn = () => {
  const [form] = Form.useForm();
  const { signIn } = useAuth();

  const onFinish = async (values) => {
    const { email, password } = values;

    const { error } = await signIn({ email, password });

    if (error) {
      alert('Error signing in.');
    } else {
      form.resetFields();
      closeModal();
    }
  };

  return (
    <Form
      name="sign_in"
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
            Sign In
        </Button>
          <a href="">
            Forgot password
        </a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignIn;