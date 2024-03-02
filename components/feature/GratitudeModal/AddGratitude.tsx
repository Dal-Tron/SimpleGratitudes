import dayjs from 'dayjs';
import { ChangeEvent, useState } from 'react';

import { useStore } from '@/store/store';
import { ExpandingTextarea } from 'Components/base/Textarea/ExpandingTextarea';

interface Gratitude {
  gratitude: string;
  updated_at?: string;
}

interface Props {
  gratitude: Gratitude;
}

export const AddGratitude = ({ gratitude }: Props) => {
  const profile = useStore((state) => state.profile);
  const [text, setText] = useState(gratitude?.gratitude || '');

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setText(value);
  };

  const currentDate = dayjs().format('MMMM D, YYYY');

  return (
    <div className="add-gratitude">
      <ExpandingTextarea
        maxLength={255}
        onChange={handleTextChange}
        value={text}
        className="add-gratitude-textarea"
        placeholder="My simple gratitude is..."
      />
      <span className="add-gratitude-from">Shared by {profile?.username}</span>
      <span className="add-gratitude-date">{currentDate}</span>
    </div>
  );
};
