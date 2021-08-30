import { useState } from 'react'
import { Input, Tooltip } from 'antd'

import { useAuth } from 'Context/auth'

import { validUsername } from 'Helpers/validation'

const DeleteAccountInput = ({
  handleConfirmDeleteAccount = () => { },
}) => {
  const { username } = useAuth();

  const [showDeleteNotice, setShowDeleteNotice] = useState(false);
  const [stateUsername, setStateUsername] = useState('');
  const [tooltipTitle, setTooltipTitle] = useState('Enter username');

  const handleUsernameConfirmationInputChange = (e) => {
    const usernameValue = e.target.value;

    setStateUsername(usernameValue);

    if (validUsername(usernameValue)) {
      if (usernameValue !== username) {
        handleConfirmDeleteAccount(false);
        setShowDeleteNotice(true);
        return setTooltipTitle('Please confirm username');
      }

      if (usernameValue === username) {
        handleConfirmDeleteAccount(true);
        return setShowDeleteNotice(false);
      }

      setShowDeleteNotice(true);
      setTooltipTitle('Username needs to be minimum of 3 characters');
    }
  }

  return (
    <Tooltip
      title={tooltipTitle}
      placement='bottom'
      visible={showDeleteNotice}
    >
      <Input
        className='settings-delete-account'
        onChange={handleUsernameConfirmationInputChange}
        placeholder='Enter username to delete'
        size='large'
        value={stateUsername}
      />
    </Tooltip>
  )
}

export default DeleteAccountInput;