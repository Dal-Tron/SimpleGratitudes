import { Spin } from 'antd'
import { SmileTwoTone } from '@ant-design/icons'

const Loading = ({
  indicator = <SmileTwoTone twoToneColor='#73b8cb' spin={true} />
}) => {
  return (
    <div className='loader'>
      <Spin size='large' indicator={indicator} />
    </div>
  )
}

export default Loading;