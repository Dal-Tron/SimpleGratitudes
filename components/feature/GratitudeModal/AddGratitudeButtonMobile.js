import { PlusCircleOutlined } from "@ant-design/icons";

const AddGratitudeButtonMobile = ({ onClick = () => {} }) => {
  const handleClick = () => {
    return onClick();
  };

  return (
    <div
      className="hide-on-desktop gratitude-button-mobile"
      onClick={handleClick}
    >
      <div className="gratitude-container-mobile">
        <PlusCircleOutlined style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default AddGratitudeButtonMobile;
