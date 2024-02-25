import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form } from 'antd';

import FormInput from 'Components/FormInput';
import { useSignModal } from 'Context/modal';
import { validEmail, validPassword } from 'Helpers/validation';

export const SignInForm = ({
  disabled = false,
  email = '',
  password = '',
  setEmail = () => {},
  setPassword = () => {},
  showForgotPassword = false,
  triggerValidation = false,
}) => {
  const { showSignModal } = useSignModal();

  return (
    <Form name="sign" className="user-signin-form">
      <Form.Item name="email">
        <div className="input-signin">
          <FormInput
            disabled={disabled}
            inputValue={email}
            onChange={setEmail}
            name="email"
            placeholder="Email"
            prefix={<MailOutlined className="signin-icon" />}
            required={true}
            title="Email"
            tooltipVisible={showSignModal}
            triggerValidation={triggerValidation}
            validator={validEmail}
          />
        </div>
      </Form.Item>
      {!showForgotPassword && (
        <Form.Item name="password">
          <div className="input-signin">
            <FormInput
              disabled={disabled}
              inputValue={password}
              onChange={setPassword}
              name="password"
              passwordInput={true}
              placeholder="Password"
              prefix={<LockOutlined />}
              required={true}
              title="Password"
              tooltipVisible={showSignModal}
              triggerValidation={triggerValidation}
              validator={validPassword}
            />
          </div>
        </Form.Item>
      )}
    </Form>
  );
};
