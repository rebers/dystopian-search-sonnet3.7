module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3B30',
          dark: '#CC2D24',
          light: '#FF6B64',
        },
        secondary: {
          DEFAULT: '#13C2C2',
          dark: '#109999',
          light: '#36DEDE',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#1A1A1A',
        },
        light: {
          DEFAULT: '#E6E6E6',
          dark: '#9E9E9E',
        },
        accent: {
          DEFAULT: '#FF9000',
          dark: '#CC7200',
          light: '#FFAD40',
        },
      },
      fontFamily: {
        sans: ['var(--font-exo)', 'sans-serif'],
        display: ['var(--font-orbitron)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.DEFAULT)',
        'neon-green': '0 0 5px theme(colors.secondary.DEFAULT), 0 0 20px theme(colors.secondary.DEFAULT)',
        'neon-orange': '0 0 5px theme(colors.accent.DEFAULT), 0 0 20px theme(colors.accent.DEFAULT)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 59, 48, 0.5), 0 0 10px rgba(255, 59, 48, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(255, 59, 48, 0.8), 0 0 20px rgba(255, 59, 48, 0.6), 0 0 30px rgba(255, 59, 48, 0.4)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.33' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg stroke=\'%23FF3B30\' stroke-opacity=\'0.15\' stroke-width=\'0.5\'%3E%3Cpath d=\'M-14 30h88M30 -14v88\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        'scanline': 'linear-gradient(to bottom, rgba(255, 59, 48, 0.1) 50%, transparent 50%)',
      },
    },
  },
  plugins: [],
} 