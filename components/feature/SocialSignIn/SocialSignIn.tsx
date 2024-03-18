import { Button } from '@/components/base/Button/Button';
import { FacebookIcon } from '@/icons/Facebook';
import { GmailIcon } from '@/icons/Gmail';
import { FC } from 'react';

interface SocialLoginButtonsProps {
  handleSubmitGmail: () => void;
  handleSubmitFacebook: () => void;
}

export const SocialSignIn: FC<SocialLoginButtonsProps> = ({
  handleSubmitGmail,
  handleSubmitFacebook,
}) => {
  return (
    <div className="flex flex-col justify-end gap-2 mt-6 border-white border-[1px] p-2 rounded-lg">
      <Button
        className="flex justify-center"
        onClick={handleSubmitGmail}
        type="primary"
      >
        <div className="flex flex-row">
          <GmailIcon className="w-6 h-6 mx-2 text-primary" />
          Gmail
        </div>
      </Button>
      <Button
        className="flex justify-center"
        onClick={handleSubmitFacebook}
        type="primary"
      >
        <div className="flex flex-row">
          <FacebookIcon className="w-6 h-6 mx-2 text-primary" />
          Facebook
        </div>
      </Button>
    </div>
  );
};
