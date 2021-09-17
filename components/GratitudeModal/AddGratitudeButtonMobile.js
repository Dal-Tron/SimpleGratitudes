import { PlusCircleOutlined } from '@ant-design/icons'

import { useAuthState } from 'Context/auth'
import { useSignModal } from 'Context/modal'

const AddGratitudeButtonMobile = ({ onClick = () => { } }) => {
  const { session } = useAuthState();
  const { updateSignModal } = useSignModal();

  const handleClick = () => {
    if (!session.access_token) {
      return updateSignModal(true);
    }

    return onClick();
  }

  return (
    <div className='hide-on-desktop gratitude-button-mobile' onClick={handleClick}>
      <div className='gratitude-container-mobile'>
        <PlusCircleOutlined style={{ fontSize: 40 }} />
      </div>
    </div>
  )
}

export default AddGratitudeButtonMobile;