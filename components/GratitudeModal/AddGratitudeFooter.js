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
        <span className='add-gratitude-button'>
          <Button onClick={handleSubmitGratitude} type='primary'>
            Submit
          </Button>
        </span>
      )
    }

    return <span className='add-gratitude-button-mobile' onClick={handleSubmitGratitude}><CheckCircleFilled /></span>;
  }

  return (
    <div className='add-gratitude-action-buttons'>
      <span className='add-gratitude-switch-container'>
        <span className={`add-gratitude-switch-option ${!publicGratitude && 'add-gratitude-switch-option-active'}`}>Private</span>
        <span className='add-gratitude-switch'><Switch checked={publicGratitude} onChange={onPublicSwitchChange} /></span>
        <span className={`add-gratitude-switch-option ${publicGratitude && 'add-gratitude-switch-option-active'}`}>Public</span>
      </span>
      {renderSubmitButton()}
    </div>
  )
}

export default AddGratitudeFooter;