import { useState } from 'react'
import { Form, Button, notification } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'

import PasswordInput from 'Components/PasswordInput'
import FormInput from 'Components/FormInput'

import { validEmail, validPassword } from 'Helpers/validation'

const SignIn = ({ closeModal }) => {
  const { signIn } = useAuth();
  const { showSignModal } = useSignModal();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerValidation, setTriggerValidation] = useState(false);

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setTriggerValidation(false);
  }

  const onFinish = async () => {
    setTriggerValidation(true);

    if (
      validEmail(email)
      && validPassword(password)
    ) {
      const { error, data } = await signIn({ email, password });
      const username = data?.user?.user_metadata?.username ?? '';

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
        resetFields();
        closeModal();

        return router.push(`/${username}`)
      }
    }

    return null;
  };

  return (
    <Form
      name="sign_in"
      onFinish={onFinish}
    >
      <Form.Item name="email">
        <FormInput
          inputValue={email}
          onChange={setEmail}
          placeholder='Email'
          prefix={<MailOutlined />}
          required={true}
          title='Email'
          tooltipVisible={showSignModal}
          triggerValidation={triggerValidation}
          validator={validEmail}
        />
      </Form.Item>
      <Form.Item name="password">
        <PasswordInput
          onChange={setPassword}
          triggerValidation={triggerValidation}
          inputValue={password}
        />
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