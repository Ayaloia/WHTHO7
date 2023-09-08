import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "round-transitions": {
          '0%': {
            "clip-path": "circle(0%)",
            "opacity": "100",
          },
          "100%": {
            "clip-path": "circle(100%)",
            "opacity": "100",
          },
        },
        "little-shake": {
          "0%": { "transform": "translateY(-2%)" },
          "25%": { "transform": "translateX(-2%)" },
          "50%": { "transform": "translateY(2%)" },
          "75%": { "transform": "translateX(2%)" },
          "100%": { "transform": "translateY(-2%)" },
        }
      },
      transitionTimingFunction: {
        "quintic": "cubic-bezier(0.76, 0.05, 0.86, 0.06)"
      },
      animation: {
        "round-transitions": "round-transitions 1s cubic-bezier(0.76, 0.05, 0.86, 0.06)",
        "little-shake": "little-shake 8s linear infinite",
      },
    },
  },
  plugins: [],
}
export default config
