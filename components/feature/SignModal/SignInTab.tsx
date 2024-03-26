import { notification } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';

import { validEmail, validPassword } from '@/helpers/validation';
import { AuthService } from '@/services/auth';
import { useLoading } from './LoadingContext';
import { SignIn } from './SignIn';
import { SignInSubmit } from './SignInSubmit';

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

    setLoading(false);
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
      <SignInSubmit
        isLoading={isLoading}
        onSubmit={handleSubmit}
        submitText="Sign In"
        mainMessage="Don't have an account?"
        actionMessage="Register"
        onChangeTab={handleChangeTab}
      />
    </>
  );
};
