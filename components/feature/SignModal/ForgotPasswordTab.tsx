import { notification } from 'antd';
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
    try {
      const result = await AuthService.resetEmail(email);
      if (result) {
        notification.open({
          message: 'Successfully sent reset email',
          type: 'success',
          duration: 2,
        });
      }
    } catch (err) {
      notification.open({
        message: 'Unable to send reset email at this time',
        type: 'error',
        duration: 2,
      });
    } finally {
      setLoading(false);
    }
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
