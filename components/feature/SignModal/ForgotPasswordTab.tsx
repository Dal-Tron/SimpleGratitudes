import { ChangeEvent, FC, useState } from 'react';

import { SignIn } from '@/components/feature/SignModal/SignIn';
import { validEmail } from '@/helpers/validation';
import { AuthService } from '@/services/auth';
import { useLoading } from './LoadingContext';
import { SignInSubmit } from './SignInSubmit';

interface ForgotPasswordTabProps {
  email: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
}

export const ForgotPasswordTab: FC<ForgotPasswordTabProps> = ({
  email,
  onEmailChange,
  onChangeTab,
}) => {
  const { isLoading, setLoading } = useLoading();
  const [checkValidation, setCheckValidation] = useState(false);

  const handleSubmit = async () => {
    setCheckValidation(true);
    if (!validEmail(email)) return;

    setLoading(true);

    await AuthService.resetEmail(email);

    setLoading(false);
  };

  const handleChangeTab = () => {
    onChangeTab('1');
  };

  return (
    <>
      <SignIn
        key="forgot-password-signin"
        disabled={isLoading}
        email={email}
        setEmail={onEmailChange}
        showPasswordInput={false}
        checkValidation={checkValidation}
      />
      <SignInSubmit
        isLoading={isLoading}
        onSubmit={handleSubmit}
        submitText="Send Reset Link"
        mainMessage="Remember your password?"
        actionMessage="Sign In"
        onChangeTab={handleChangeTab}
      />
    </>
  );
};
