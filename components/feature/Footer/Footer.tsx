import { CopyrightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useMemo } from 'react';

export const Footer = () => {
  const date = useMemo(() => {
    return dayjs().format('YYYY');
  }, []);

  return (
    <div className="main-footer">
      <div className="main-footer-copyright-container">
        <div className="main-footer-copyright-text">
          <Image
            src="https://hedciaofaszacfhqwvky.supabase.co/storage/v1/object/public/simplegratitudes/Logo-white.png"
            alt="Herman & Dob Inc"
            width={122}
            height={30}
          />
          <span style={{ marginLeft: 7, marginRight: 4 }}>
            <CopyrightOutlined />
          </span>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};
