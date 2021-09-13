import { useState } from 'react'
import { Tabs, Modal, notification } from 'antd'
import { useRouter } from 'next/router'

import SignIn from 'Components/SignIn'

import { useAuth } from 'Context/auth'

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

  const { resetEmail, updateUsername } = useAuth();
  const router = useRouter();

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
        return 'Sign In';
      case '2':
        return 'Register';
      case '3':
        return 'Send Reset Link';
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
    return notification.open({
      message: error.message,
      type: 'error',
      duration: 2,
    });
  }

  const handleSubmitSignIn = async (email, password) => {
    const { error } = await AuthService.signIn({ email, password });

    if (error) {
      return handleError(error);
    }

    resetFields();
    onCancel();
    openSuccessMessage();
    return router.push('/');
  }

  const handleSubmitRegistration = async (email, password) => {
    const username = email.split('@')[0];
    const { error, data } = await AuthService.register({ email, password });

    if (error) {
      return handleError(error);
    }

    const id = data.user.id;
    const { error: profileError } = await ProfileService.insertProfile(id, username);

    if (profileError) {
      return handleError(profileError);
    }

    updateUsername(username);
    openSuccessMessage();
    resetFields();
    onCancel();
    return router.push('/');
  }

  const handleForgotPassword = async (email) => {
    const { error } = await resetEmail(email);

    if (error) {
      return handleError(error);
    }

    resetFields();
    onCancel();
    return openSuccessMessage();
  }

  const handleSubmit = () => {
    setTriggerValidation(true);

    if (
      validEmail(email)
      && validPassword(password)
    ) {
      if (activeKey === '1') {
        return handleSubmitSignIn(email, password);
      }

      if (activeKey === '2') {
        return handleSubmitRegistration(email, password);
      }

      if (activeKey === '3') {
        return handleForgotPassword(email);
      }

      return;
    }
  };

  return (
    <Modal
      className="user-modal"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      okText={getOkText(activeKey)}
      cancelButtonProps={{
        className: 'user-modal-cancel-button'
      }}
    >
      <Tabs animated={true} activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Sign In" key="1">
          <SignIn
            closeModal={onCancel}
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
            closeModal={onCancel}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            triggerValidation={triggerValidation}
          />
        </TabPane>
        <TabPane tab="Forgot Password" key="3">
          <SignIn
            closeModal={onCancel}
            showForgotPassword={true}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            triggerValidation={triggerValidation}
          />
        </TabPane>
      </Tabs>
    </Modal>
  )
}

export default SignModal;






