import { FC } from 'react';

interface ChangeTabPromptProps {
  mainMessage: string;
  actionMessage: string;
  onClick: () => void;
}

export const ChangeTabPrompt: FC<ChangeTabPromptProps> = ({
  onClick,
  mainMessage,
  actionMessage,
}) => {
  return (
    <div className="flex flex-row justify-end my-4">
      <div className="text-primary-1">{mainMessage}</div>
      <div
        className="text-white mx-2 cursor-pointer underline"
        onClick={onClick}
      >
        {actionMessage}
      </div>
    </div>
  );
};
