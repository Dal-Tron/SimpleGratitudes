import { useState, useEffect } from 'react'
import { Modal, notification } from 'antd'

import AddGratitudeFooter from 'Components/GratitudeModal/AddGratitudeFooter'
import AddGratitude from 'Components/GratitudeModal/AddGratitude'

import { useAuthState } from 'Context/auth'
import { useSignModal, useAddGratitudeModal } from 'Context/modal'
import { useDataRender } from 'Context/data'

import { supabase } from 'Supabase/client'

const AddGratitudeModal = ({
  visible = false,
  onCancel = () => { },
  editableGratitude = {},
}) => {
  const [gratitude, setGratitude] = useState({});

  const { updateSignModal } = useSignModal();
  const { updateDataRef } = useDataRender();
  const { setEditableGratitude } = useAddGratitudeModal();
  const { user, profile: { username } } = useAuthState();

  useEffect(() => {
    if (editableGratitude.gratitude) handleUpdateGratitude('gratitude', editableGratitude.gratitude);
    if (editableGratitude.date) handleUpdateGratitude('date', editableGratitude.date);
    if (editableGratitude.id) handleUpdateGratitude('id', editableGratitude.id);
    if (editableGratitude.public) handleUpdateGratitude('public', editableGratitude.public);
  }, [editableGratitude]);

  const handleUpdateGratitude = (name, value) => {
    return setGratitude((currentGratitudeState) => ({
      ...currentGratitudeState,
      [name]: value
    }));
  }

  const handleGratitudeText = (e) => {
    return handleUpdateGratitude('gratitude', e.target.value);
  }

  const handleTagChange = (e) => {
    e.preventDefault();
    return handleUpdateGratitude('tags', e.target.value);
  }

  const handlePublicSwitchChange = (checked) => {
    return handleUpdateGratitude('public', checked);
  }

  const resetGratitude = () => {
    onCancel();
    setGratitude({});
    setEditableGratitude({});
    updateDataRef();
  }

  const handleError = (error) => {
    if (error.message === 'JWT expired') {
      return updateSignModal(true);
    }
    notification.open({
      type: 'error',
      message: 'Error: Failed to save gratitude.'
    });
  }

  const submitGratitudeUpdate = async () => {
    if (gratitude.gratitude) {
      const { error: editingGratitudeError } = await supabase.from('gratitudes').update({
        gratitude: gratitude.gratitude,
        public: gratitude.public,
        approved: false,
      }).match({ id: editableGratitude.id });

      if (!editingGratitudeError) {
        notification.open({
          type: 'success',
          message: 'Successfully edited gratitude!'
        });

        return resetGratitude();
      }

      return handleError(editingGratitudeError);
    }
  }

  const submitGratitudeInsert = async () => {
    if (gratitude.gratitude) {
      const { error: insertGratitudeError } = await supabase.from('gratitudes').insert([
        {
          ...gratitude,
          user_id: user.id,
          username,
        }
      ]);

      if (!insertGratitudeError) {
        notification.open({
          type: 'success',
          message: 'Successfully saved gratitude!'
        });

        return resetGratitude();
      }

      return handleError(insertGratitudeError);
    }
  }

  const handleSubmitGratitude = () => {
    if (username) {
      if (editableGratitude?.id) {
        return submitGratitudeUpdate();
      } else {
        return submitGratitudeInsert();
      }
    }
  }

  return (
    <Modal className="add-gratitude-modal"
      visible={visible}
      destroyOnClose={true}
      closable={false}
      footer={<AddGratitudeFooter
        handleCancel={resetGratitude}
        handleSubmitGratitude={handleSubmitGratitude}
        onPublicSwitchChange={handlePublicSwitchChange}
        onTagChange={handleTagChange}
        publicGratitude={gratitude.public}
        tag={gratitude.tags}
      />}
    >
      <AddGratitude
        gratitude={gratitude}
        handleGratitudeText={handleGratitudeText}
        user={user}
      />
    </Modal>
  );
}

export default AddGratitudeModal;


