import { useState } from 'react'
import { Form, Button, notification } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'

import PasswordInput from 'Components/PasswordInput'
import FormInput from 'Components/FormInput'

import { validEmail, validPassword, validUsername } from 'Helpers/validation'

const Register = ({ closeModal }) => {
  const router = useRouter();
  const { register, updateUser } = useAuth();
  const { showSignModal } = useSignModal();

  const [triggerValidation, setTriggerValidation] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFields = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setTriggerValidation(false);
  }

  const onFinish = async () => {
    setTriggerValidation(true);

    if (
      validEmail(email)
      && validPassword(password)
      && validUsername(username)
    ) {
      const { error } = await register({ email, password });

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

          resetFields();
          closeModal();

          return router.push(`/${username ?? ''}`)
        }
      }
    }

    return null;
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
    >
      <Form.Item name="username">
        <FormInput
          inputValue={username}
          onChange={setUsername}
          placeholder='Username'
          prefix={<UserOutlined />}
          required={true}
          title='Username'
          tooltipVisible={showSignModal}
          triggerValidation={triggerValidation}
          validator={validUsername}
        />
      </Form.Item>
      <Form.Item name="email">
        <FormInput
          title='Email'
          tooltipVisible={showSignModal}
          prefix={<MailOutlined />}
          placeholder='Email'
          inputValue={email}
          onChange={setEmail}
          validator={validEmail}
          triggerValidation={triggerValidation}
          required={true}
        />
      </Form.Item>
      <Form.Item name="password">
        <PasswordInput
          onChange={setPassword}
          inputValue={password}
          required={true}
          triggerValidation={triggerValidation}
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