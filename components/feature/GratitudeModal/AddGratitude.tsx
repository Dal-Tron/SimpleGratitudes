import { Input } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';

const { TextArea } = Input;

export const AddGratitude = ({
  gratitude = {},
  handleGratitudeText = () => {},
}) => {
  const username = '';

  const gratitudeText = gratitude.gratitude || '';

  const gratitudeDate = useMemo(() => {
    const format = 'MMMM D, YYYY';

    if (gratitude.date) {
      return dayjs(gratitude.date).format(format);
    }

    return dayjs().format(format);
  }, [gratitude.date]);

  return (
    <div className="add-gratitude">
      <TextArea
        maxLength={255}
        onChange={handleGratitudeText}
        value={gratitudeText}
        className="add-gratitude-textarea"
        placeholder="My simple gratitude is..."
        autoSize={true}
      />
      <span className="add-gratitude-from">Shared by {username}</span>
      <span className="add-gratitude-date">{gratitudeDate}</span>
    </div>
  );
};
