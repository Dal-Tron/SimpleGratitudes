import { PlusCircleOutlined } from '@ant-design/icons'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'

const AddGratitudeButtonMobile = ({ onClick = () => { } }) => {
  const { user } = useAuth();
  const { updateSignModal } = useSignModal();

  const handleClick = () => {
    if (!user) {
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