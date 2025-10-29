/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia'],
        'sen': ['Sen', 'ui-sans-serif', 'system-ui'],
        'brand': ['Playfair Display', 'ui-serif', 'Georgia'],
      },
      colors: {
        // Primary brand colors (Green for sustainability)
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        },
        
        // Secondary colors (Royal Blue for energy)
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        
        // Accent colors (Red for highlights)
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a'
        },
        
        // Theme colors for consistent styling
        theme: {
          bg: '#ffffff',
          'bg-secondary': '#f8fafc',
          'bg-accent': '#f1f5f9',
          'bg-muted': '#f4f4f5',
          text: '#111827',
          'text-secondary': '#374151',
          'text-muted': '#6b7280',
          'text-light': '#9ca3af',
          border: '#e5e7eb',
          'border-light': '#f3f4f6'
        }
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #22c55e, #3b82f6)',
        'gradient-primary': 'linear-gradient(to right, #16a34a, #22c55e)',
        'gradient-secondary': 'linear-gradient(to right, #3b82f6, #2563eb)',
        'gradient-accent': 'linear-gradient(to right, #ef4444, #dc2626)',
      },
      
      // Custom shadows
      boxShadow: {
        'theme': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'theme-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'theme-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'primary': '0 4px 14px 0 rgba(34, 197, 94, 0.15)',
        'secondary': '0 4px 14px 0 rgba(59, 130, 246, 0.15)',
        'accent': '0 4px 14px 0 rgba(239, 68, 68, 0.15)'
      }
    },
  },
  plugins: [],
}