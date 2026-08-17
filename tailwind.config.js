/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          gold: '#C9A227',
          goldLight: '#E8C858',
          goldDark: '#9A7714',
          goldFoil: '#D4AF37',
          maroon: '#7A1F2B',
          maroonDark: '#501019',
          maroonLight: '#9B2242',
          crimson: '#63131F',
          ivory: '#FDFBF7',
          cream: '#FBF4E8',
          sand: '#F3E9DA',
          peacock: '#0B6E4F',
          peacockDark: '#074834',
          peacockLight: '#12966D',
          dark: '#2A1A12',
          charcoal: '#1E120B',
          brownMuted: '#5C4436',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA771C 100%)',
        'royal-gradient': 'linear-gradient(145deg, #7A1F2B 0%, #501019 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FDFBF7 0%, #FBF4E8 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(253, 251, 247, 0.8) 0%, rgba(251, 244, 232, 0.95) 100%)',
      },
      boxShadow: {
        'royal': '0 20px 40px -15px rgba(122, 31, 43, 0.15)',
        'gold-glow': '0 0 25px rgba(201, 162, 39, 0.35)',
        'card-hover': '0 25px 50px -12px rgba(42, 26, 18, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
