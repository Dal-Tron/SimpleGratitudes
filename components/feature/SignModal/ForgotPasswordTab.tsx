import { notification } from 'antd';
import { ChangeEvent, FC, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { validEmail } from '@/helpers/validation';
import { AuthService } from '@/services/auth';

import { SignIn } from './SignIn';

interface ForgotPasswordTabProps {
  email: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
}

export const ForgotPasswordTab: FC<ForgotPasswordTabProps> = ({
  email,
  handleEmailChange,
  onCancel,
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
      <div className="flex flex-row justify-end gap-2">
        <Button onClick={onCancel} type="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} type="primary">
          {loading ? 'Sending' : 'Send Reset Link'}
        </Button>
      </div>
    </>
  );
};
