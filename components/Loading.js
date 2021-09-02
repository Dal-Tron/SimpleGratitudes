import { Spin } from 'antd'
import { SmileTwoTone } from '@ant-design/icons'

const Loading = () => {
  return (
    <div className='loader'>
      <Spin size='large' indicator={<SmileTwoTone twoToneColor='#73b8cb' spin={true} />} />
    </div>
  )
}

export default Loading;