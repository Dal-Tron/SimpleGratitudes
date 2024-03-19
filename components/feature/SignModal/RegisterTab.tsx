import { notification } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';

import { validEmail, validPassword } from '@/helpers/validation';
import { AuthService } from '@/services/auth';
import { useLoading } from './LoadingContext';
import { SignIn } from './SignIn';
import { SignInSubmit } from './SignInSubmit';

interface RegisterTabProps {
  email: string;
  password: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
  onCancel: () => void;
}

export const RegisterTab: FC<RegisterTabProps> = ({
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
    onChangeTab('1');
  };

  const handleSubmit = async () => {
    setCheckValidation(true);
    if (!validEmail(email) || !validPassword(password)) return;

    setLoading(true);

    try {
      const result = await AuthService.register({ email, password });

      if (result) {
        notification.open({
          message: 'Successfully registered!',
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
        message: 'Unable to register at this time',
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
        key="register"
        password={password}
        setEmail={onEmailChange}
        setPassword={onPasswordChange}
      />
      <SignInSubmit
        isLoading={isLoading}
        onSubmit={handleSubmit}
        submitText="Register"
        mainMessage="Already have an account?"
        actionMessage="Sign In"
        onChangeTab={handleChangeTab}
      />
    </>
  );
};
