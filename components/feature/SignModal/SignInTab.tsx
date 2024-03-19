import { notification } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { validEmail, validPassword } from '@/helpers/validation';
import { AuthService } from '@/services/auth';
import { ChangeTabPrompt } from './ChangeToPrompt';
import { useLoading } from './LoadingContext';
import { SignIn } from './SignIn';

interface SignInTabProps {
  email: string;
  password: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
  onCancel: () => void;
}

export const SignInTab: FC<SignInTabProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onChangeTab,
  onCancel,
}) => {
  const router = useRouter();
  const { isLoading, setLoading } = useLoading();

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

  return (
    <>
      <SignIn
        checkValidation={checkValidation}
        disabled={isLoading}
        email={email}
        key="signin"
        password={password}
        setEmail={onEmailChange}
        setPassword={onPasswordChange}
      />
      {isLoading ? (
        <div className="flex justify-center pb-4 pt-2">
          <SpinLoading className="text-5xl" />
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-end gap-2">
            <Button onClick={handleSubmit} type="primary">
              Sign In
            </Button>
          </div>
          <ChangeTabPrompt
            mainMessage="Don't have an account?"
            actionMessage="Register"
            onClick={handleChangeTab}
          />
        </>
      )}
    </>
  );
};
