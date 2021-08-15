import { CopyrightOutlined } from '@ant-design/icons'
import Image from 'next/image'
import dayjs from 'dayjs'

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='main-footer-copyright-container'>
        <div className='main-footer-copyright-text'>
          <Image
            src='https://hedciaofaszacfhqwvky.supabase.co/storage/v1/object/public/simplegratitudes/Logo-white.png'
            alt='Herman & Dob Inc'
            width={122}
            height={30}
          />
          <span style={{ marginLeft: 7, marginRight: 4 }}><CopyrightOutlined /></span>
          <div>{dayjs().format('YYYY')}</div>
          <div className='donate-button-container'>
            <form className='donate-button' action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="hosted_button_id" value="CC69U2F87CN72" />
              <input type="image" src="https://hedciaofaszacfhqwvky.supabase.co/storage/v1/object/public/simplegratitudes/support-1.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;