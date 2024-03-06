import { notification } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { validEmail, validPassword } from '@/helpers/validation';
import { AuthService } from '@/services/auth';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { SignIn } from './SignIn';

interface SignInTabProps {
  email: string;
  password: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
  onCancel: () => void;
}

export const SignInTab: FC<SignInTabProps> = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  onChangeTab,
  onCancel,
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [checkValidation, setCheckValidation] = useState(false);

  const handleChangeTab = () => {
    onChangeTab('2');
  };

  const handleSubmit = async () => {
    setCheckValidation(true);
    if (!validEmail(email) || !validPassword(password)) return;

    setLoading(true);
    try {
      const result = await AuthService.signIn({ email, password });

      if (result) {
        notification.open({
          message: 'Successfully signed in!',
          type: 'success',
          duration: 2,
        });

        onCancel();

        router.push('/');
      }
    } catch (err) {
      if (err.message?.indexOf('For') >= 0) {
        notification.open({
          message: 'Please check for email confirmation.',
          type: 'error',
          duration: 2,
        });
      }

      notification.open({
        message: 'Unable to sign in at this time',
        type: 'error',
        duration: 2,
      });
    } finally {
      setLoading(false);
    }
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
        checkValidation={checkValidation}
        disabled={loading}
        email={email}
        key="signin"
        password={password}
        setEmail={handleEmailChange}
        setPassword={handlePasswordChange}
      />
      {loading ? (
        <div className="flex justify-center p-6">
          <SpinLoading className="text-5xl" />
        </div>
      ) : (
        <>
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
              Sign In
            </Button>
          </div>
          <div className="flex flex-col justify-end gap-2 mt-6">
            <Button
              onClick={handleSubmitGmail}
              type="custom"
              primaryColor="#df4936"
            >
              Sign In with Gmail
            </Button>
            <Button
              onClick={handleSubmitFacebook}
              type="custom"
              primaryColor="#3a5a8d"
            >
              Sign In with Facebook
            </Button>
          </div>
        </>
      )}
    </>
  );
};
