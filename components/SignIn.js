import { Form, Input, Button, notification } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import { useAuth } from 'Context/auth';

import PasswordInput from 'Components/PasswordInput'

const SignIn = ({ closeModal }) => {
  const [form] = Form.useForm();
  const { signIn } = useAuth();

  const onFinish = async (values) => {
    const { email, password } = values;

    const { error } = await signIn({ email, password });

    if (error) {
      notification.open({
        message: error.message,
        type: 'error',
        duration: 2,
      });
    } else {
      notification.open({
        message: 'Signed In!',
        type: 'success',
        duration: 2,
      });
      form.resetFields();
      closeModal();
    }
  };

  const handlePassword = (password) => {
    form.setFieldsValue({
      password
    });
  }

  return (
    <Form
      name="sign_in"
      onFinish={onFinish}
      form={form}
    >
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
            Sign In
        </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignIn;