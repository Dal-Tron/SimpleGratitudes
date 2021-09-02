import { useState, useEffect } from 'react'
import { Form, Input, Button, notification, Tooltip } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'

import PasswordInput from 'Components/PasswordInput'
import { validEmail, validPassword, validUsername } from 'Helpers/validation'

const Register = ({ closeModal }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { register, updateUser } = useAuth();
  const { showSignModal } = useSignModal();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [showUserInputTooltip, setShowUserInputTooltip] = useState(false);
  const [userInputTooltipTitle, setUserInputTooltipTitle] = useState('Invalid username');

  const [showEmailInputTooltip, setShowEmailInputTooltip] = useState(false);
  const [emailInputTooltipTitle, setEmailInputTooltipTitle] = useState('Invalid email');

  const handlePassword = (password) => {
    form.setFieldsValue({
      password
    });
  }

  useEffect(() => {
    // close all tooltips if modal closes
    if (!showSignModal) {
      setShowUserInputTooltip(false);
      setShowEmailInputTooltip(false);
    }
  }, [showSignModal])

  const handleUsername = (event) => {
    const username = event.target.value;

    if (!validUsername(username)) {
      setShowUserInputTooltip(true);

      return setUsername(username);
    }

    setShowUserInputTooltip(false);

    return setUsername(username);
  }

  const handleEmail = (event) => {
    const email = event.target.value;

    if (!validEmail(email)) {
      setShowEmailInputTooltip(true);

      return setEmail(email);
    }

    setShowEmailInputTooltip(false);

    return setEmail(email);
  }

  const onFinish = async (values) => {
    const { password } = values;

    if (!email) {
      setShowEmailInputTooltip(true);
    }

    if (!username) {
      setShowUserInputTooltip(true);
    }

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
        const { error, data: user } = await updateUser({ username });

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
    }

    // not valid email, or password, or username
    return "";
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item name="username">
        <Tooltip
          title={userInputTooltipTitle}
          placement='bottom'
          visible={showUserInputTooltip && showSignModal}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
        </Tooltip>
      </Form.Item>
      <Form.Item name="email">
        <Tooltip
          title={emailInputTooltipTitle}
          placement='bottom'
          visible={showEmailInputTooltip && showSignModal}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </Tooltip>
      </Form.Item>
      <Form.Item name="password">
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