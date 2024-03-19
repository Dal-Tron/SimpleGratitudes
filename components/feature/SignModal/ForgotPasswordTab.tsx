import { notification } from 'antd';
import { ChangeEvent, FC, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { SignIn } from '@/components/feature/SignModal/SignIn';
import { validEmail } from '@/helpers/validation';
import { AuthService } from '@/services/auth';
import { ChangeTabPrompt } from './ChangeToPrompt';

interface ForgotPasswordTabProps {
  email: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
}

export const ForgotPasswordTab: FC<ForgotPasswordTabProps> = ({
  email,
  handleEmailChange,
  onChangeTab,
}) => {
  const [loading, setLoading] = useState(false);
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
        disabled={loading}
        email={email}
        setEmail={handleEmailChange}
        showPasswordInput={false}
        checkValidation={checkValidation}
      />
      {loading ? (
        <div className="flex justify-center p-6">
          <SpinLoading className="text-5xl" />
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-end gap-2">
            <Button onClick={handleSubmit} type="primary">
              Send Reset Link
            </Button>
          </div>
          <ChangeTabPrompt
            mainMessage="Remember your password?"
            actionMessage="Sign In"
            onClick={handleChangeTab}
          />
        </>
      )}
    </>
  );
};
