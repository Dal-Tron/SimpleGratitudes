import { FC } from 'react';

export const GmailIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gmail"
      role="img"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
    >
      <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path>
      <path
        d="M 154 248l102 77l102-77v-98l-102 77l-102-77"
        fill="#ea4335"
      ></path>
      <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path>
      <path
        d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
        fill="#c5221f"
      ></path>
      <path
        d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
        fill="#fbbc04"
      ></path>
    </svg>
  );
};
