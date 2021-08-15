import { Input, Switch, Button } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

const AddGratitudeFooter = ({
  onTagChange = () => { },
  onPublicSwitchChange = () => { },
  publicGratitude = false,
  tag = '',
  handleSubmitGratitude = () => { },
}) => {
  const windowWidth = window.innerWidth;

  const handleTagInputPress = (e) => {
    const re = /[0-9A-Za-z\! \.\'\,\:]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  const renderSubmitButton = () => {
    if (windowWidth > 500) {
      return (
        <span className='new-gratitude-button'>
          <Button onClick={handleSubmitGratitude} type='primary'>
            Submit
          </Button>
        </span>
      )
    }

    return <span className='new-gratitude-button-mobile' onClick={handleSubmitGratitude}><CheckCircleFilled /></span>;
  }

  return (
    <div className='new-gratitude-action-buttons'>
      <span className='new-gratitude-switch-container'>
        <span className='new-gratitude-tags'>
          <Input value={tag} className='new-gratitude-tag' placeholder='Tag' onChange={onTagChange} onKeyPress={handleTagInputPress} />
        </span>
        <span className={`new-gratitude-switch-option ${!publicGratitude && 'new-gratitude-switch-option-active'}`}>Private</span>
        <span className='new-gratitude-switch'>
          <Switch checked={publicGratitude} onChange={onPublicSwitchChange} /></span>
        <span className={`new-gratitude-switch-option ${publicGratitude && 'new-gratitude-switch-option-active'}`}>Public</span>
      </span>
      {renderSubmitButton()}
    </div>
  )
}

export default AddGratitudeFooter;