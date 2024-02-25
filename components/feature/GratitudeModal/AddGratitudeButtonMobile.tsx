import { PlusCircleOutlined } from '@ant-design/icons';

const AddGratitudeButtonMobile = ({ onClick = () => {} }) => {
  const handleClick = () => {
    return onClick();
  };

  return (
    <div onClick={handleClick}>
      <PlusCircleOutlined style={{ fontSize: 40 }} />
    </div>
  );
};

export default AddGratitudeButtonMobile;
