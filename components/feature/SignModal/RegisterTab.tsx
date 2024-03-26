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

    await AuthService.register({ email, password });

    onCancel();

    router.push('/');

    setLoading(false);
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
