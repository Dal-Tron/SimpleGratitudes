import { PlusCircleOutlined } from '@ant-design/icons'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'

const AddGratitudeButtonMobile = ({ onClick = () => { } }) => {
  const windowWidth = window.innerWidth;

  const { user } = useAuth();
  const { updateSignModal } = useSignModal();

  if (windowWidth > 500) return null;

  const handleClick = () => {
    if (!user) {
      return updateSignModal(true);
    }

    return onClick();
  }

  return (
    <div className='gratitude-button-mobile' onClick={handleClick}>
      <div className='gratitude-container-mobile'>
        <PlusCircleOutlined style={{ fontSize: 40 }} />
      </div>
    </div>
  )
}

export default AddGratitudeButtonMobile;