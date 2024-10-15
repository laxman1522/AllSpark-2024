import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'counter-background': '#3f0d15',
        'counter-color': '#f3baa7',
        'label-color': '#f3baa7',
        'counter-text-color': '#332723',
        'animation-background': 'f2baa740',
        'text-color': '#f2bba7',
        'button-color': '#f9f0d5',
        'button-text-color': '#511717',
        'header-background': '#27021295',
        'events-color': '#F9F0D5',
        'events-counter-text-color': '#270212',
        'memories-background': '#27021295',
        'memories-border-color': '#F2BAA7',
        'committee-background': '#27021293',
        'events-background-color': '#F2BAA7B2',
        'events-counter-bg-color': '#F9F0D5',
        'speaker-background-color': '#22000b99',
      },
      fontFamily: {
        dseg: ['DSEG7_Classic_Bold', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #270212 0%, #511717 100%)',
      },
      translate: {
        '2/5': '40%',
      },
      keyframes: {
        shakeY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'shake-y': 'shakeY 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
