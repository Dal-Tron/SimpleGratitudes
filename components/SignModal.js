import { useState } from 'react'
import { Tabs, Modal, notification } from 'antd'
import { useRouter } from 'next/router'

import SignIn from 'Components/SignIn'

import { useAuthDispatch } from 'Context/auth'

import { validEmail, validPassword } from 'Helpers/validation'

import AuthService from 'Services/auth'
import ProfileService from 'Services/profile'

const { TabPane } = Tabs;

const SignModal = ({
  visible = false,
  onCancel = () => { },
}) => {
  const [activeKey, setActiveKey] = useState('1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerValidation, setTriggerValidation] = useState(false);
  const [loading, setLoading] = useState(false);

  const authDispatch = useAuthDispatch();
  const router = useRouter();
  const uniqueEmailId = `${Math.floor(Math.random() * 10)}`;

  const handleTabChange = (tab) => {
    setActiveKey(tab);
  }

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setTriggerValidation(false);
  }

  const getOkText = (key) => {
    switch (key) {
      case '1':
        return loading ? 'Signing In...' : 'Sign In';
      case '2':
        return loading ? 'Registering...' : 'Register';
      case '3':
        return loading ? 'Sending Reset Link...' : 'Send Reset Link';
      default: 'Sign In';
    }
  }

  const getSuccessMessage = (key) => {
    switch (key) {
      case '1':
        return 'Signed In!';
      case '2':
        return 'Registered! Please check email for confirmation link.';
      case '3':
        return 'Please check email for password reset link.';
      default: 'Sign In';
    }
  }

  const openSuccessMessage = () => {
    return notification.open({
      message: getSuccessMessage(activeKey),
      type: 'success',
      duration: activeKey === '1' ? 1 : 5,
    });
  }

  const handleError = (error) => {
    const finalError = {
      ...error,
      message: error.message || 'Error'
    }

    if (finalError.message?.indexOf('For') >= 0) {
      finalError.message = 'Please check for email confirmation.';
    }

    return notification.open({
      message: finalError.message,
      type: 'error',
      duration: 2,
    });
  }

  const handleCancel = () => {
    setActiveKey('1');
    return onCancel();
  }

  const handleSubmitSignIn = async () => {
    setLoading(true);
    try {
      const { session, error } = await AuthService.signIn({ email, password });

      if (error) throw error;

      if (session) authDispatch({ type: 'set-session', session });

      handleCancel();
      resetFields();
      openSuccessMessage();
      router.push('/');
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmitRegistration = async () => {
    setLoading(true);
    const username = `${email.split('@')[0]}_${uniqueEmailId}`;

    try {
      const { user, error } = await AuthService.register({ email, password });

      if (error) throw error;

      if (user && user.id) {
        const { error: profileError } = await ProfileService.insertProfile(user.id, username);

        // TODO: Handle this error on the api side
        if (profileError.message?.indexOf('insert or update') >= 0) throw new Error('Already registered.');
        if (profileError) throw new Error('Unable to register.');

        authDispatch({ type: 'set-username', username });
        handleCancel();
        openSuccessMessage();
        resetFields();
      }
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const { error } = await AuthService.resetEmail(email);

      if (error) throw error;

      handleCancel();
      openSuccessMessage();
      resetFields();
    } catch (err) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = () => {
    setTriggerValidation(true);

    if (
      validEmail(email)
      && !loading
    ) {
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
        className: `user-modal-submit-button ${loading ? 'user-modal-submit-button-disabled' : ''}`
      }}
    >
      <Tabs animated={true} activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Sign In" key="1">
          <SignIn
            closeModal={handleCancel}
            disabled={loading}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            triggerValidation={triggerValidation}
          />
          <div className='user-modal-no-account-wrapper'>
            <div className='user-modal-no-account-question'>Don't have an account?</div>
            <div onClick={() => setActiveKey('2')} className='user-modal-no-account-register'>Register</div>
          </div>
        </TabPane>
        <TabPane tab="Register" key="2">
          <SignIn
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
          <SignIn
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
  )
}

export default SignModal;






