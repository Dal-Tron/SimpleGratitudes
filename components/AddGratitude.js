import { Input } from 'antd'
import dayjs from 'dayjs'

const { TextArea } = Input;

const AddGratitude = ({
  user,
  gratitude = {},
  handleGratitudeText = () => { }
}) => {

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
    <div className='new-gratitude'>
      <TextArea
        maxLength={255}
        onChange={handleGratitudeText}
        value={gratitudeText}
        className='new-gratitude-textarea'
        placeholder='My simple gratitude is...'
        onKeyPress={handleTextAreaKeyPress}
        autoSize={true}
      />
      <span className='new-gratitude-from'>Shared by {user?.user_metadata?.username}</span>
      <span className='new-gratitude-date'>{gratitudeDate}</span>
    </div>
  )
}

export default AddGratitude;
