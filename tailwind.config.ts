// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--color-card) / <alpha-value>)",
          foreground: "hsl(var(--color-card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover) / <alpha-value>)",
          foreground: "hsl(var(--color-popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          foreground: "hsl(var(--color-primary-foreground) / <alpha-value>)",
          glow: "hsl(var(--color-primary-glow) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
          foreground: "hsl(var(--color-secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted) / <alpha-value>)",
          foreground: "hsl(var(--color-muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
          foreground: "hsl(var(--color-accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive) / <alpha-value>)",
          foreground: "hsl(var(--color-destructive-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--color-border) / <alpha-value>)",
        input: "hsl(var(--color-input) / <alpha-value>)",
        ring: "hsl(var(--color-ring) / <alpha-value>)",
        sidebar: {
          background: "hsl(var(--color-sidebar-background) / <alpha-value>)",
          foreground: "hsl(var(--color-sidebar-foreground) / <alpha-value>)",
          primary: "hsl(var(--color-sidebar-primary) / <alpha-value>)",
          "primary-foreground": "hsl(var(--color-sidebar-primary-foreground) / <alpha-value>)",
          accent: "hsl(var(--color-sidebar-accent) / <alpha-value>)",
          "accent-foreground": "hsl(var(--color-sidebar-accent-foreground) / <alpha-value>)",
          border: "hsl(var(--color-sidebar-border) / <alpha-value>)",
          ring: "hsl(var(--color-sidebar-ring) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-earth": "var(--gradient-earth)",
        "gradient-sunrise": "var(--gradient-sunrise)",
        "gradient-field": "var(--gradient-field)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [],
};