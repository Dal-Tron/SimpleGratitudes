import { Tabs } from 'antd';
import { ChangeEvent, useEffect, useState } from 'react';

import { Modal } from '@/components/base/Modal/Modal';

import { ForgotPasswordTab } from './ForgotPasswordTab';
import { RegisterTab } from './RegisterTab';
import { SignInTab } from './SignInTab';

const { TabPane } = Tabs;

export const SignModal = ({ visible = false, onCancel = () => {} }) => {
  const [activeKey, setActiveKey] = useState('1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkEmailInputId = setInterval(() => {
      // Attempt to find the email input element
      const emailInputElement = document.querySelector(
        'input[name="email"]',
      ) as HTMLInputElement | null;

      // If the element is found and has a value, use it
      if (emailInputElement?.value) {
        setEmail(emailInputElement.value);
      }
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(checkEmailInputId);
  }, [setEmail]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleCancel = () => {
    setActiveKey('1');
    setEmail('');
    setPassword('');
    return onCancel();
  };

  const handleTabChange = (tab: string) => {
    setActiveKey(tab);
  };

  return (
    <Modal
      className="sg-box-shadow bg-primary-0 py-12 px-8"
      isOpen={visible}
      onClose={handleCancel}
    >
      <Tabs animated={true} activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Sign In" key="1">
          <SignInTab
            {...{
              email,
              password,
              handleEmailChange,
              handlePasswordChange,
              onChangeTab: setActiveKey,
              onCancel: handleCancel,
            }}
          />
        </TabPane>
        <TabPane tab="Register" key="2">
          <RegisterTab
            {...{
              email,
              password,
              handleEmailChange,
              handlePasswordChange,
              onChangeTab: setActiveKey,
              onCancel: handleCancel,
            }}
          />
        </TabPane>
        <TabPane tab="Forgot Password" key="3">
          <ForgotPasswordTab
            {...{
              email,
              handleEmailChange,
              onCancel: handleCancel,
            }}
          />
        </TabPane>
      </Tabs>
    </Modal>
  );
};
