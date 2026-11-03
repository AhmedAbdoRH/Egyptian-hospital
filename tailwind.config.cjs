/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#013777',
          'navy-dark': '#002654',
          blue: '#0b5599',
          'blue-light': '#0284c7',
          sky: '#38bdf8',
          silver: '#64748b',
          canvas: '#f4f8fc',
          'card-bg': 'rgba(255, 255, 255, 0.96)',
          'text-heading': '#061a33',
          'text-body': '#1e293b',
          'text-muted': '#334155',
          emerald: '#059669',
          whatsapp: '#25d366',
          secondary: '#fdc33e',
          'secondary-hover': '#e5ad32',
          'secondary-dark': '#8c6000',
          'secondary-bg': 'rgba(253, 195, 62, 0.14)',
          'secondary-border': 'rgba(253, 195, 62, 0.38)',
        },
      },
    },
  },
  plugins: [],
}
