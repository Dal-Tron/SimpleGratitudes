import { Switch, Button } from "antd";
import { CheckCircleFilled, CloseCircleOutlined } from "@ant-design/icons";

const AddGratitudeFooter = ({
  handleCancel = () => {},
  handleSubmitGratitude = () => {},
  onPublicSwitchChange = () => {},
  publicGratitude = false,
  submitting = false,
}) => {
  const windowWidth = window.innerWidth;

  const renderSubmitButton = () => {
    if (windowWidth > 500) {
      return (
        <span className="add-gratitude-button">
          <Button
            className="user-modal-cancel-button"
            onClick={handleCancel}
            type="secondary"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmitGratitude} type="primary">
            {submitting ? "Sharing..." : "Share"}
          </Button>
        </span>
      );
    }

    return (
      <>
        <span
          className="add-gratitude-button-mobile add-gratitude-button-mobile-close"
          onClick={handleCancel}
        >
          <CloseCircleOutlined />
        </span>
        <span
          className={`add-gratitude-button-mobile ${
            submitting ? "add-gratitude-button-mobile-submitting" : ""
          }`}
          onClick={handleSubmitGratitude}
        >
          <CheckCircleFilled />
        </span>
      </>
    );
  };

  return (
    <div className="add-gratitude-action-buttons">
      <span className="add-gratitude-switch-container">
        <span
          className={`add-gratitude-switch-option ${
            !publicGratitude && "add-gratitude-switch-option-active"
          }`}
        >
          Private
        </span>
        <span className="add-gratitude-switch">
          <Switch checked={publicGratitude} onChange={onPublicSwitchChange} />
        </span>
        <span
          className={`add-gratitude-switch-option ${
            publicGratitude && "add-gratitude-switch-option-active"
          }`}
        >
          Public
        </span>
      </span>
      {renderSubmitButton()}
    </div>
  );
};

export default AddGratitudeFooter;
