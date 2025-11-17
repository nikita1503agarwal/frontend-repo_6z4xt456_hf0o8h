/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0f",
          secondary: "#13131a",
          tertiary: "#1a1a24",
          glass: "rgba(20,20,30,0.6)",
        },
        neon: {
          purple: "#8b5cf6",
          purpleLight: "#a78bfa",
          cyan: "#06b6d4",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          tertiary: "#64748b",
        },
        status: {
          success: "#10b981",
          error: "#ef4444",
          warning: "#f59e0b",
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.3)",
        glow: "0 0 20px rgba(139, 92, 246, 0.5)",
        glowLg: "0 0 40px rgba(139, 92, 246, 0.8)",
      },
      backdropBlur: {
        20: '20px',
      },
      borderColor: {
        glass: 'rgba(139, 92, 246, 0.2)'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fade: 'fade 400ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-in-out',
        glow: 'glowPulse 2s ease-in-out infinite',
        pulseSoft: 'pulseSoft 1.5s ease-in-out infinite',
      },
      borderRadius: {
        'xl': '16px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(20,20,30,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        },
        '.neon-border': {
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
