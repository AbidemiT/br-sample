import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
			  lgx: '1200px', // large extra
			  '3xl': '1700px'
			},
			boxShadow: {
			  xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
			  sm: '4px 4px 0px 0px rgba(6, 6, 6, 0.70)',
			  md: '2px 3px 0px 2px rgba(6, 6, 6, 0.70);'
			},
			borderStyle: {
			  none: 'none',
			  solid: 'solid',
			},
			colors: {
			  transparent: 'transparent',
			  black: '#000000',
			  dark: {
				400: '#333333',
				700: '#060606',
				800: '#212121',
			  },
			  white: '#ffffff',
			  light: {
				100: '#E8E8E8',
			  },
			  blue: {
				50: '#F0F9FF',
				500: '#0075FF',
				700: '#026AA2'
			  },
			  red: {
				50: '#FEF3F2',
				700: '#B42318'
			  },
			  brown: {
				700: '#B54708'
			  },
			  'bc-green': {
				400: '#A3FF50'
			  },
			  green: {
				50: '#ECFDF3',
				500: '#12B76A',
				700: '#027A48'
			  },
			  purple: {
				50: '#CCDCFF',
				700: '#6941C6',
				800: '#001033'
			  },
			  gray: {
				100: '#F2F4F7',
				200: '#EAECF0',
				300: '#D0D5DD',
				500: '#667085',
				600: '#475467',
				700: '#344054',
				800: '#1D2939',
				900: '#101828',
			  },
			  grey: {
				50: '#FDFDFD',
				100: '#f7f7f7',
				200: '#F3F5F8',
				400: '#AFAFAF',
				500: '#FAFAFB',
				600: '#D9D9D9',
				700: '#F6F6F6',
				900: '#646464',
			  },
			  neutral: {
				100: '#787F84'
			  }
			},
			fontSize: {
			  sm: '0.875rem',
			  base: '1rem',
			  xl: '1.25rem',
			  '2xl': '1.5rem',
			  '3xl': '1.75rem',
			  '4xl': '2rem',
			  '5xl': '2.25rem',
			  '6xl': '2.5rem',
			  '7xl': '3.75rem',
			},
			borderRadius: {
			  none: '0',
			  sm: '4px',
			  DEFAULT: '8px',
			  lg: '12px',
			  full: '50%',
			},
			spacing: {
			  px: '1px',
			  4: '4px',
			  8: '8px',
			  '10.5': '10.5px',
			  12: '12px',
			  '14.5': '14.5px',
			  16: '16px',
			  20: '20px',
			  24: '24px',
			  28: '28px',
			  32: '32px',
			  36: '36px',
			  40: '40px',
			  44: '44px',
			  48: '48px',
			  52: '52px',
			  56: '56px',
			  60: '60px',
			  64: '64px',
			  72: '72px',
			  80: '80px',
			  96: '96px',
			  100: '100px',
			  104: '104px',
			  108: '108px',
			  112: '112px',
			  116: '116px',
			  120: '120px',
			  124: '124px',
			},
		  },
	},
};
export default config;
