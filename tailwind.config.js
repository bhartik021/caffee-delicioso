/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Pulled from the Caffee Delicioso logo: deep coffee-green on white
        brand: {
          50: '#EEF6F3',
          100: '#D5EAE3',
          200: '#A9D3C6',
          300: '#73B5A2',
          400: '#3F8F7A',
          500: '#1F725E',
          600: '#135F4E',
          700: '#0F5143',
          800: '#0C4237',
          900: '#0A372E',
        },
        cream: '#FAF7F0',
        sand: '#F3EEE3',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'fade-up': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'none' } },
        eq: { '0%,100%': { transform: 'scaleY(0.25)' }, '50%': { transform: 'scaleY(1)' } },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'fade-up': 'fade-up 0.6s ease both',
        eq: 'eq 1.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
