import { ChangeEvent, FC } from 'react';

import { Button } from '@/components/base/Button/Button';

import { SignIn } from './SignIn';

interface RegisterTabProps {
  email: string;
  password: string;
  loading: boolean;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
  onCancel: () => void;
}

export const RegisterTab: FC<RegisterTabProps> = ({
  email,
  password,
  loading,
  handleEmailChange,
  handlePasswordChange,
  onChangeTab,
  onCancel,
}) => {
  const handleChangeTab = () => {
    onChangeTab('1');
  };

  const handleSubmit = () => {
    console.log('registering in');
  };

  const handleSubmitGmail = () => {
    console.log('registering in gmail');
  };

  const handleSubmitFacebook = () => {
    console.log('registering in facebook');
  };

  return (
    <>
      <SignIn
        key="register-signin"
        disabled={loading}
        email={email}
        password={password}
        setEmail={handleEmailChange}
        setPassword={handlePasswordChange}
      />
      <div className="user-modal-no-account-wrapper">
        <div className="user-modal-no-account-question">
          Already have an account?
        </div>
        <div
          onClick={handleChangeTab}
          className="user-modal-no-account-register"
        >
          Sign In
        </div>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <Button onClick={onCancel} type="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} type="primary">
          {loading ? 'Registering' : 'Register'}
        </Button>
      </div>
      <div className="flex flex-col justify-end gap-2 mt-6">
        <Button
          onClick={handleSubmitGmail}
          type="custom"
          primaryColor="#df4936"
        >
          {loading ? 'Registering with Gmail' : 'Register with Gmail'}
        </Button>
        <Button
          onClick={handleSubmitFacebook}
          type="custom"
          primaryColor="#3a5a8d"
        >
          {loading ? 'Registering with Facebook' : 'Register with Facebook'}
        </Button>
      </div>
    </>
  );
};
