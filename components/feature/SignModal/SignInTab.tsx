import { ChangeEvent, FC } from 'react';

import { Button } from '@/components/base/Button/Button';

import { SignIn } from './SignIn';

interface SignInTabProps {
  email: string;
  password: string;
  loading: boolean;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
  onCancel: () => void;
}

export const SignInTab: FC<SignInTabProps> = ({
  email,
  password,
  loading,
  handleEmailChange,
  handlePasswordChange,
  onChangeTab,
  onCancel,
}) => {
  const handleChangeTab = () => {
    onChangeTab('2');
  };

  const handleSubmit = () => {
    console.log('signing in');
  };

  const handleSubmitGmail = () => {
    console.log('signing in gmail');
  };

  const handleSubmitFacebook = () => {
    console.log('signing in facebook');
  };

  return (
    <>
      <SignIn
        key="password-signin"
        disabled={loading}
        email={email}
        password={password}
        setEmail={handleEmailChange}
        setPassword={handlePasswordChange}
      />
      <div className="user-modal-no-account-wrapper">
        <div className="user-modal-no-account-question">
          Don't have an account?
        </div>
        <div
          onClick={handleChangeTab}
          className="user-modal-no-account-register"
        >
          Register
        </div>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <Button onClick={onCancel} type="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} type="primary">
          {loading ? 'Signing In' : 'Sign In'}
        </Button>
      </div>
      <div className="flex flex-col justify-end gap-2 mt-6">
        <Button
          onClick={handleSubmitGmail}
          type="custom"
          primaryColor="#df4936"
        >
          {loading ? 'Signing In with Gmail' : 'Sign In with Gmail'}
        </Button>
        <Button
          onClick={handleSubmitFacebook}
          type="custom"
          primaryColor="#3a5a8d"
        >
          {loading ? 'Signing In with Facebook' : 'Sign In with Facebook'}
        </Button>
      </div>
    </>
  );
};
