import { notification } from 'antd';
import { ChangeEvent, FC, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { SignIn } from '@/components/feature/SignModal/SignIn';
import { validEmail } from '@/helpers/validation';
import { AuthService } from '@/services/auth';

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
    onChangeTab('2');
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
        <Button onClick={handleSubmit} type="primary">
          {loading ? 'Sending' : 'Send Reset Link'}
        </Button>
      </div>
      <div className="flex flex-row justify-end my-4">
        <div className="text-primary-1">Don't have an account?</div>
        <div
          className="text-white mx-2 cursor-pointer"
          onClick={handleChangeTab}
        >
          Register
        </div>
      </div>
    </>
  );
};
