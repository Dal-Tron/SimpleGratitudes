import { Button } from '@/components/base/Button/Button';
import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { ChangeTabPrompt } from './ChangeToPrompt';

interface SignInSubmitProps {
  isLoading: boolean;
  onSubmit: () => void;
  mainMessage: string;
  actionMessage: string;
  onChangeTab: () => void;
  submitText: string;
}

export const SignInSubmit: React.FC<SignInSubmitProps> = ({
  isLoading,
  onSubmit,
  mainMessage,
  actionMessage,
  onChangeTab,
  submitText,
}) => {
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center p-6">
          <SpinLoading className="text-5xl" />
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-end gap-2">
            <Button onClick={onSubmit} type="primary">
              {submitText}
            </Button>
          </div>
          <ChangeTabPrompt
            mainMessage={mainMessage}
            actionMessage={actionMessage}
            onClick={onChangeTab}
          />
        </>
      )}
    </div>
  );
};
