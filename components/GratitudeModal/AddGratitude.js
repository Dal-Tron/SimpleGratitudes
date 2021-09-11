import { Input } from 'antd'
import dayjs from 'dayjs'

import { useProfile } from 'Context/profile'

const { TextArea } = Input;

const AddGratitude = ({
  gratitude = {},
  handleGratitudeText = () => { }
}) => {
  const { username } = useProfile();

  const gratitudeText = gratitude.gratitude || '';
  const gratitudeDate = gratitude.date
    ? dayjs(gratitude.date).format('MMMM D, YYYY')
    : dayjs().format('MMMM D, YYYY');

  const handleTextAreaKeyPress = (e) => {
    const re = /[0-9A-Za-z\! \.\'\,\:]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  return (
    <div className='add-gratitude'>
      <TextArea
        maxLength={255}
        onChange={handleGratitudeText}
        value={gratitudeText}
        className='add-gratitude-textarea'
        placeholder='My simple gratitude is...'
        onKeyPress={handleTextAreaKeyPress}
        autoSize={true}
      />
      <span className='add-gratitude-from'>Shared by {username}</span>
      <span className='add-gratitude-date'>{gratitudeDate}</span>
    </div>
  )
}

export default AddGratitude;
