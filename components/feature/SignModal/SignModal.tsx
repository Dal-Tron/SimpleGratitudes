import { Modal, Tabs, notification } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ProfileService } from '@/services/profile';
import { validEmail, validPassword } from 'Helpers/validation';
import { AuthService } from 'Services/auth';

import { SignInForm } from './SignIn';

const { TabPane } = Tabs;

export const SignModal = ({ visible = false, onCancel = () => {} }) => {
  const [activeKey, setActiveKey] = useState('1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerValidation, setTriggerValidation] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const uniqueEmailId = `${Math.floor(Math.random() * 10000000)}`;

  useEffect(() => {
    const checkEmailInputId = setInterval(() => {
      // there is a current bug that doesn't catch autofill
      // https://github.com/formium/formik/issues/3165
      if (document && document.querySelector('input[name="email"]')?.value) {
        const inputValue = document.querySelector('input[name="email"]')?.value;
        if (inputValue) setEmail(inputValue);
      }
    }, 2000);

    return () => clearInterval(checkEmailInputId);
  }, []);

  const handleTabChange = (tab) => {
    setActiveKey(tab);
  };

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setTriggerValidation(false);
  };

  const getOkText = (key) => {
    switch (key) {
      case '1':
        return loading ? 'Signing In...' : 'Sign In';
      case '2':
        return loading ? 'Registering...' : 'Register';
      case '3':
        return loading ? 'Sending Reset Link...' : 'Send Reset Link';
      default:
        'Sign In';
    }
  };

  const getSuccessMessage = (key) => {
    switch (key) {
      case '1':
        return 'Signed In!';
      case '2':
        return 'Registered! Please check email for confirmation link.';
      case '3':
        return 'Please check email for password reset link.';
      default:
        'Sign In';
    }
  };

  const openSuccessMessage = () => {
    return notification.open({
      message: getSuccessMessage(activeKey),
      type: 'success',
      duration: activeKey === '1' ? 1 : 5,
    });
  };

  const handleError = (error) => {
    const finalError = {
      ...error,
      message: error.message || 'Error',
    };

    if (finalError.message?.indexOf('For') >= 0) {
      finalError.message = 'Please check for email confirmation.';
    }

    return notification.open({
      message: finalError.message,
      type: 'error',
      duration: 2,
    });
  };

  const handleCancel = () => {
    setActiveKey('1');
    return onCancel();
  };

  const handleSubmitSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await AuthService.signIn({ email, password });

      if (error) throw error;

      handleCancel();
      resetFields();
      openSuccessMessage();
      router.push('/');
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRegistration = async () => {
    setLoading(true);

    const emailUsername = email.split('@')[0];
    const emailCharacters = emailUsername.substring(0, 3);
    const username = `${emailCharacters}_${uniqueEmailId}`;

    try {
      const { user, error } = await AuthService.register({ email, password });

      if (error) throw error;

      if (user && user.id) {
        const { error: profileError } = await ProfileService.insertProfile(
          user.id,
          username,
        );

        // TODO: Handle this error on the api side
        if (
          profileError &&
          profileError.message?.indexOf('insert or update') >= 0
        )
          throw new Error('Already registered.');
        if (profileError) throw new Error('Unable to register.');

        handleCancel();
        openSuccessMessage();
        resetFields();
      }
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const { error } = await AuthService.resetEmail(email);

      if (error) throw error;

      handleCancel();
      openSuccessMessage();
      resetFields();
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setTriggerValidation(true);

    if (validEmail(email) && !loading) {
      if (validPassword(password)) {
        if (activeKey === '1') {
          return handleSubmitSignIn();
        }

        if (activeKey === '2') {
          return handleSubmitRegistration();
        }
      }

      if (activeKey === '3') {
        return handleForgotPassword();
      }
    }
  };

  return (
    <Modal
      className="user-modal"
      visible={visible}
      onCancel={handleCancel}
      onOk={handleSubmit}
      okText={getOkText(activeKey)}
      closable={false}
      cancelButtonProps={{
        className: 'user-modal-cancel-button',
      }}
      okButtonProps={{
        className: `user-modal-submit-button ${
          loading ? 'user-modal-submit-button-disabled' : ''
        }`,
      }}
    >
      <Tabs animated={true} activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Sign In" key="1">
          <SignInForm
            key="password-signin"
            closeModal={handleCancel}
            disabled={loading}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            triggerValidation={triggerValidation}
          />
          <div className="user-modal-no-account-wrapper">
            <div className="user-modal-no-account-question">
              Don't have an account?
            </div>
            <div
              onClick={() => setActiveKey('2')}
              className="user-modal-no-account-register"
            >
              Register
            </div>
          </div>
        </TabPane>
        <TabPane tab="Register" key="2">
          <SignInForm
            key="register-signin"
            closeModal={handleCancel}
            disabled={loading}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            triggerValidation={triggerValidation}
          />
        </TabPane>
        <TabPane tab="Forgot Password" key="3">
          <SignInForm
            key="forgot-password-signin"
            closeModal={handleCancel}
            disabled={loading}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            showForgotPassword={true}
            triggerValidation={triggerValidation}
          />
        </TabPane>
      </Tabs>
    </Modal>
  );
};
