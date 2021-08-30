import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

import { useAuth } from 'Context/auth'

import PasswordInput from 'Components/PasswordInput'

const Register = ({ closeModal }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { register, updateUser } = useAuth();

  const handlePassword = (password) => {
    form.setFieldsValue({
      password
    });
  }

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
        notification.open({
          message: 'Registration successful!',
          type: 'success',
          duration: 2,
        });

        form.resetFields();
        closeModal();

        return router.push(`/`);
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
        <PasswordInput handlePassword={handlePassword} />
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