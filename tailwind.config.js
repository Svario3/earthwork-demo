/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#101622',
          800: '#161e2e',
          700: '#1f2a3f',
          600: '#2d3b55',
          500: '#475569',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        caterpillar: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
          vibrant: '#FFB800',
          glow: 'rgba(245, 158, 11, 0.25)',
        },
        hazard: {
          yellow: '#FFCC00',
          black: '#121212',
          orange: '#FF5E00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Oswald', 'sans-serif'],
        tech: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hazard-stripes': 'repeating-linear-gradient(45deg, #111827, #111827 12px, #f59e0b 12px, #f59e0b 24px)',
        'hazard-stripes-subtle': 'repeating-linear-gradient(45deg, rgba(245, 158, 11, 0.12), rgba(245, 158, 11, 0.12) 10px, transparent 10px, transparent 20px)',
        'dot-matrix': 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)',
        'carbon-mesh': 'radial-gradient(#1e293b 15%, transparent 16%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
