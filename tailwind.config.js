/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-0': 'var(--color-primary-0)',
        'primary-1': 'var(--color-primary-1)',
        'primary-2': 'var(--color-primary-2)',
        'primary-3': 'var(--color-primary-3)',
        'primary-4': 'var(--color-primary-4)',
        'primary-5': 'var(--color-primary-5)',
        'primary-6': 'var(--color-primary-6)',
        'primary-7': 'var(--color-primary-7)',
        'secondary-1': 'var(--color-secondary-1)',
        'accent-1': 'var(--color-accent-1)',
        'accent-2': 'var(--color-accent-2)',
        'accent-3': 'var(--color-accent-3)',
        'accent-4': 'var(--color-accent-4)',
        'accent-5': 'var(--color-accent-5)',
        'accent-6': 'var(--color-accent-6)',
        'dark-1': 'var(--color-dark-1)',
        'light-1': 'var(--color-light-1)',
      },
      width: {
        100: '25rem', // 400px
        104: '26rem', // 416px
        108: '27rem', // 432px
        112: '28rem', // 448px
        116: '29rem', // 464px
        120: '30rem', // 480px
        124: '31rem', // 496px
        128: '32rem', // 512px
        132: '33rem', // 528px
        136: '34rem', // 544px
        140: '35rem', // 560px
        144: '36rem', // 576px
        148: '37rem', // 592px
        152: '38rem', // 608px
        156: '39rem', // 624px
        160: '40rem', // 640px
        164: '41rem', // 656px
        168: '42rem', // 672px
        172: '43rem', // 688px
        176: '44rem', // 704px
        180: '45rem', // 720px
      },
    },
  },
  plugins: [],
};
