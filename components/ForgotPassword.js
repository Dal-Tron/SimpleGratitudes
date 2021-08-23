import { Form, Input, Button, notification } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { useAuth } from 'Context/auth';

import { supabase } from 'Supabase/client'

const ForgotPassword = ({ closeModal }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { email } = values;

    const { data, error } = await supabase.auth.api.resetPasswordForEmail(email);

    if (error) {
      notification.open({
        message: error.message,
        type: 'error',
        duration: 2,
      });
    } else {
      notification.open({
        message: 'Password Reset Link Sent!',
        type: 'success',
        duration: 2,
      });
      form.resetFields();
      closeModal();
    }
  };

  return (
    <Form
      name="reset_password"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email',
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button type="primary" htmlType="submit">
            Send Password Reset Link
        </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ForgotPassword;