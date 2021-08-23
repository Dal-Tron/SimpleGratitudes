import { Tabs, Modal } from 'antd'

import SignIn from 'Components/SignIn'
import Register from 'Components/Register'
import ForgotPassword from 'Components/ForgotPassword'

const { TabPane } = Tabs;

const SignModal = ({
  visible = false,
  onCancel = () => { },
}) => {
  return (
    <Modal
      className="user-modal"
      visible={visible}
      onCancel={onCancel}
      footer={null}>
      <Tabs animated={true}>
        <TabPane tab="Sign In" key="1">
          <SignIn closeModal={onCancel} />
        </TabPane>
        <TabPane tab="Register" key="2">
          <Register closeModal={onCancel} />
        </TabPane>
        <TabPane tab="Forgot Password" key="3">
          <ForgotPassword closeModal={onCancel} />
        </TabPane>
      </Tabs>
    </Modal>
  )
}

export default SignModal;






