import { Button } from "Components/base/Button/Button";
import { Toggle } from "Components/base/Toggle/Toggle";

export const ModalFooter = ({
  onCancel,
  onSubmit,
  onPublicChange,
  isPublic,
  loading,
}: {
  onCancel: () => void;
  onSubmit: () => void;
  onPublicChange: (_isPublic: boolean) => void;
  isPublic: boolean;
  loading: boolean;
}) => {
  const handleTogglePublic = (publicValue: boolean) => {
    onPublicChange(publicValue);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Toggle
          leftLabel="Public"
          rightLabel="Private"
          onChange={handleTogglePublic}
          value={isPublic}
        />
        <div className="flex flex-row space-x-3">
          <Button onClick={onCancel} type="secondary">
            Cancel
          </Button>
          <Button loading={loading} onClick={onSubmit} type="primary">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};
