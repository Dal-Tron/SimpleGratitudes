import { useMemo } from 'react'
import { Input } from 'antd'
import dayjs from 'dayjs'

import { useAuthState } from 'Context/auth'

const { TextArea } = Input;

const AddGratitude = ({
  gratitude = {},
  handleGratitudeText = () => { }
}) => {
  const { profile: { username } } = useAuthState();

  const gratitudeText = gratitude.gratitude || '';

  const gratitudeDate = useMemo(() => {
    if (gratitude.date) {
      return dayjs(gratitude.date).format('MMMM D, YYYY');
    }
    return dayjs().format('MMMM D, YYYY');
  }, [gratitude.date]);

  return (
    <div className='add-gratitude'>
      <TextArea
        maxLength={255}
        onChange={handleGratitudeText}
        value={gratitudeText}
        className='add-gratitude-textarea'
        placeholder='My simple gratitude is...'
        autoSize={true}
      />
      <span className='add-gratitude-from'>Shared by {username}</span>
      <span className='add-gratitude-date'>{gratitudeDate}</span>
    </div>
  )
}

export default AddGratitude;
