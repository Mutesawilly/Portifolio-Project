module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'text-fill': {
          '0%': { backgroundSize: '0% 100%' },
          '100%': { backgroundSize: '100% 100%' },
        },
      },
      animation: {
        'text-fill': 'text-fill 2s forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },  
  plugins: [],
}
