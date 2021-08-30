import { Switch, Button } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

const AddGratitudeFooter = ({
  onPublicSwitchChange = () => { },
  publicGratitude = false,
  handleSubmitGratitude = () => { },
}) => {
  const windowWidth = window.innerWidth;

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
        <span className={`new-gratitude-switch-option ${!publicGratitude && 'new-gratitude-switch-option-active'}`}>Private</span>
        <span className='new-gratitude-switch'><Switch checked={publicGratitude} onChange={onPublicSwitchChange} /></span>
        <span className={`new-gratitude-switch-option ${publicGratitude && 'new-gratitude-switch-option-active'}`}>Public</span>
      </span>
      {renderSubmitButton()}
    </div>
  )
}

export default AddGratitudeFooter;