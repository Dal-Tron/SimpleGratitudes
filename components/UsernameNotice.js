import { UserOutlined } from '@ant-design/icons';

import FormInput from 'Components/FormInput';
import { validUsername } from 'Helpers/validation';

const UsernameNotice = ({ username = '', setUsername = () => {} }) => {
  return (
    <div className="username-confirm">
      <div className="username-confirm-title">
        <UserOutlined className="username-confirm-title-icon" />
        Confirm Username
      </div>
      <div className="username-confirm-subtitle">
        This update will be applied to all <b>future</b> gratitudes as well as
        your personal page address. Previous gratitudes will not be affected.
      </div>
      <div className="username-confirm-input-wrapper">
        <FormInput
          inputValue={username}
          validator={validUsername}
          onChange={setUsername}
          className="username-confirm-input"
          prefix={
            <div className="username-confirm-domain">SimpleGratitudes.com/</div>
          }
        />
        <div className="username-confirm-only-once-container">
          <span className="username-confirm-only-once">
            * Username can only be changed once
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsernameNotice;
