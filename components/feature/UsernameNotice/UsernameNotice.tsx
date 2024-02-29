import { UserOutlined } from '@ant-design/icons';
import { ChangeEvent, FC, useState } from 'react';

import { Input } from '@/components/base/Input/Input';
import { validUsername } from '@/helpers/validation';

import { Validator } from '../../base/Validator/Validator';

interface UsernameNoticeProps {
  username?: string;
  setUsername?: (username: string) => void;
}

export const UsernameNotice: FC<UsernameNoticeProps> = ({ username = '' }) => {
  const [usernameValue, setUsernameValue] = useState(username);
  const [usernameInputDirty, setUsernameInputDirty] = useState(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (!usernameInputDirty) setUsernameInputDirty(true);

    setUsernameValue(value);
  };

  return (
    <div className="username-confirm">
      <div className="flex flex-col justify-center items-center text-white text-lg">
        <UserOutlined className="username-confirm-title-icon" />
        Confirm Username
      </div>
      <div className="username-confirm-subtitle">
        This update will be applied to all <b>future</b> gratitudes as well as
        your personal page address.
      </div>
      <Validator
        validator={validUsername}
        isDirty={usernameInputDirty}
        validationMsg="Invalid Username"
        className="mt-2"
      >
        <Input
          value={usernameValue}
          className="text-lg text-white mt-4"
          onChange={handleUsernameChange}
          prefix={
            <div className="text-white text-lg mt-4">SimpleGratitudes.com/</div>
          }
        />
      </Validator>
      <div className="username-confirm-only-once-container">
        <span className="username-confirm-only-once">
          * Username can only be changed once
        </span>
      </div>
    </div>
  );
};
