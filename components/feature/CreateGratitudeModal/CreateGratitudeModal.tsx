import dayjs from 'dayjs';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import { Modal } from '@/components/base/Modal/Modal';
import { ExpandingTextarea } from '@/components/base/Textarea/ExpandingTextarea';
import { Toggle } from '@/components/base/Toggle/Toggle';
import { GratitudesService } from '@/services/gratitudes';
import { useStore } from '@/store/store';

export const CreateGratitudeModal: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen = false, onClose }) => {
  const profile = useStore((state) => state.profile);

  const [text, setText] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(dayjs().format('MMMM D, YYYY'));
  }, []);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;

    setText(value);
  };

  const handlePublic = (value: boolean) => {
    setIsPublic(value);
  };

  const handleClose = () => {
    setText('');
    setIsPublic(false);
    setDate('');
    onClose();
  };

  const handleSubmit = () => {
    if (!text) return;

    GratitudesService.createGratitude({
      gratitude: text,
      isPublic,
      userId: profile.id,
    });

    handleClose();
  };

  return (
    <Modal
      className="sg-box-shadow rounded-[20px] bg-primary-0"
      isOpen={isOpen}
      onClose={handleClose}
    >
      <div className="flex flex-col p-2">
        <ExpandingTextarea
          className="text-3xl text-white text-center mt-8 mb-2 placeholder-white placeholder-opacity-50"
          onChange={handleTextChange}
          placeholder="My simple gratitude is.."
          value={text}
        />
        <span className="create-gratitude-from">
          Shared by {profile?.username}
        </span>
        <span className="create-gratitude-date">{date}</span>
      </div>
      <div className="flex flex-row justify-between align-center mt-2">
        <Toggle onChange={handlePublic} value={isPublic} rightLabel="Public" />
        <Button disabled={!text} type="primary" onClick={handleSubmit}>
          Share
        </Button>
      </div>
    </Modal>
  );
};
