import { ChangeEvent, FC, useEffect, useState } from 'react';

import { IconButton } from '@/components/base/Button/IconButton';
import { Input } from '@/components/base/Input/Input';
import { Validator } from '@/components/base/Validator/Validator';
import { validEmail, validPassword } from '@/helpers/validation';
import { ClosedEyeIcon } from '@/icons/ClosedEye';
import { EmailIcon } from '@/icons/Email';
import { EyeIcon } from '@/icons/Eye';
import { LockIcon } from '@/icons/Lock';

interface SignInFormProps {
  disabled?: boolean;
  email?: string;
  password?: string;
  setEmail?: (e: ChangeEvent<HTMLInputElement>) => void;
  setPassword?: (e: ChangeEvent<HTMLInputElement>) => void;
  showPasswordInput?: boolean;
  showPassword?: boolean;
  checkValidation?: boolean;
}

export const SignIn: FC<SignInFormProps> = ({
  disabled = false,
  email = '',
  password = '',
  setEmail = (_e: ChangeEvent<HTMLInputElement>) => {},
  setPassword = (_e: ChangeEvent<HTMLInputElement>) => {},
  showPasswordInput = true,
  checkValidation = false,
}) => {
  const [isEmailInputDirty, setIsEmailInputDirty] = useState(false);
  const [isPasswordInputDirty, setIsPasswordInputDirty] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (email && !isEmailInputDirty) setIsEmailInputDirty(true);
  }, [email]);

  useEffect(() => {
    if (password && !isPasswordInputDirty) setIsPasswordInputDirty(true);
  }, [password]);

  useEffect(() => {
    if (checkValidation) {
      setIsEmailInputDirty(true);
      setIsPasswordInputDirty(true);
    }
  }, [checkValidation]);

  const handleTogglePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-transparent border border-white text-white text-lg rounded-xl outline-none mb-3">
        <Validator
          isDirty={isEmailInputDirty}
          validator={validEmail}
          validationMsg="Invalid Email"
          className="p-1"
          overrideFocus={checkValidation}
        >
          <Input
            disabled={disabled}
            value={email}
            onChange={setEmail}
            name="email"
            placeholder="Email"
            prefix={<EmailIcon className="w-6 h-6 text-white" />}
          />
        </Validator>
      </div>
      {showPasswordInput && (
        <div className="bg-transparent border border-white text-white text-lg rounded-xl outline-none mb-5">
          <Validator
            isDirty={isPasswordInputDirty}
            validator={validPassword}
            validationMsg="Invalid Password"
            className="p-1"
            overrideFocus={checkValidation}
          >
            <Input
              className="w-full"
              disabled={disabled}
              value={password}
              onChange={setPassword}
              name="password"
              placeholder="Password"
              prefix={<LockIcon className="w-6 h-6 text-white" />}
              type={isPasswordVisible ? 'text' : 'password'}
              suffix={
                isPasswordVisible ? (
                  <IconButton onClick={handleTogglePasswordVisible}>
                    <ClosedEyeIcon className="w-6 h-6 text-white" />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleTogglePasswordVisible}>
                    <EyeIcon className="w-6 h-6 text-white" />
                  </IconButton>
                )
              }
            />
          </Validator>
        </div>
      )}
    </div>
  );
};
