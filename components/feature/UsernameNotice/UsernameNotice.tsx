import { FC, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { Checkbox } from '@/components/base/Checkbox/Checkbox';
import { GearIcon } from '@/icons/Gear';
import { UsernameIcon } from '@/icons/Username';

interface UsernameNoticeProps {
  onSubmit: () => void;
  username?: string;
}

export const UsernameNotice: FC<UsernameNoticeProps> = ({
  username = '',
  onSubmit,
}) => {
  const [theyUnderstand, setTheyUnderstand] = useState(false);

  const handleUnderstand = (value: boolean) => {
    setTheyUnderstand(value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center text-white text-lg">
        <GearIcon className="w-10 h-10 text-white mt-4 mb-2" />
        Confirm Username
      </div>
      <div className="text-white pt-4 pb-2 text-center text-lg">
        This update will be applied to <b>all gratitudes</b> as well as your
        personal page address.
      </div>
      <div className="flex flex-row justify-center items-center">
        <UsernameIcon className="w-10 h-10 text-white ml-2" />
        <div className="text-xl font-bold text-white ml-2 my-4">{username}</div>
      </div>
      <div className="flex justify-center mt-2">
        <Checkbox
          checked={theyUnderstand}
          onClick={handleUnderstand}
          prefix={
            <div className="text-white text-md">
              I understand that my username can only be changed once
            </div>
          }
        />
      </div>
      <div className="flex mt-6">
        <Button
          className="m-auto"
          onClick={onSubmit}
          disabled={!theyUnderstand}
          type="primary"
        >
          Confirm Username
        </Button>
      </div>
    </div>
  );
};
