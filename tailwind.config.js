export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#080808', panel: '#1A1A1A', gold: { DEFAULT: '#D4AF37', light: '#F1D87A', dark: '#9C7A1B' } },
      fontFamily: { display: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Manrope', 'system-ui', 'sans-serif'] },
      backgroundImage: { 'gold-grad': 'linear-gradient(135deg,#F1D87A 0%,#D4AF37 50%,#9C7A1B 100%)' },
    },
  },
  plugins: [],
}
