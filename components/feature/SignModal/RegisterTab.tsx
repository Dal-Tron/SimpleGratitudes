import { notification } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { AuthService } from '@/services/auth';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { validEmail, validPassword } from '@/helpers/validation';
import { ChangeTabPrompt } from './ChangeToPrompt';
import { SignIn } from './SignIn';

interface RegisterTabProps {
  email: string;
  password: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTab: (key: string) => void;
  onCancel: () => void;
}

export const RegisterTab: FC<RegisterTabProps> = ({
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
        disabled={loading}
        email={email}
        key="register"
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
          <div className="flex flex-row justify-end gap-2">
            <Button onClick={handleSubmit} type="primary">
              Register
            </Button>
          </div>
          <ChangeTabPrompt
            mainMessage="Already have an account?"
            actionMessage="Sign In"
            onClick={handleChangeTab}
          />
        </>
      )}
    </>
  );
};
