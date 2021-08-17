import { useState } from 'react'
import { Modal, notification } from 'antd'

import AddGratitudeFooter from 'Components/AddGratitudeFooter'
import AddGratitude from 'Components/AddGratitude'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'
import { useData } from 'Context/data'

import { supabase } from 'Supabase/client'

const AddGratitudeModal = ({
  visible = false,
  onCancel = () => { },
}) => {
  const [tag, setTag] = useState('');
  const [publicGratitude, setPublic] = useState(false);
  const [gratitude, setGratitude] = useState('');

  const { user } = useAuth();
  const { updateSignModal } = useSignModal();
  const { updateDataRef } = useData();

  const handleGratitudeText = (e) => {
    setGratitude(e.currentTarget.value);
  }

  const handleTagChange = (e) => {
    e.preventDefault();
    setTag(e.currentTarget.value);
  }

  const handlePublicSwitchChange = (checked) => {
    setPublic(checked);
  }

  const resetGratitude = () => {
    setTag('');
    setPublic(false);
    setGratitude('');
    onCancel();
  }

  const handleSubmitGratitude = async () => {
    if (user && user.user_metadata && user.user_metadata.username) {
      const { data, error } = await supabase.from('gratitudes').insert([
        {
          gratitude,
          user_id: user.id,
          username: user.user_metadata.username,
          public: publicGratitude,
          tags: tag,
        }
      ]);

      if (error) {
        if (error.message === 'JWT expired') {
          return updateSignModal(true);
        }
        notification.open({
          type: 'error',
          message: 'Error: Failed to save gratitude.'
        });
      } else {
        notification.open({
          type: 'success',
          message: 'Successfully saved gratitude!'
        });

        resetGratitude();
        updateDataRef();
      }
    }
  }

  return (
    <Modal className="add-gratitude-modal"
      visible={visible}
      destroyOnClose={true}
      onCancel={resetGratitude}
      footer={<AddGratitudeFooter
        onTagChange={handleTagChange}
        onPublicSwitchChange={handlePublicSwitchChange}
        publicGratitude={publicGratitude}
        tag={tag}
        handleSubmitGratitude={handleSubmitGratitude}
      />}
    >
      <AddGratitude
        gratitudeText={gratitude}
        handleGratitudeText={handleGratitudeText}
        user={user}
      />
    </Modal>
  );
}

export default AddGratitudeModal;


