import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#feeee4",
        error: "#b31b25",
        "on-tertiary": "#fff2ce",
        "primary-container": "#ff7943",
        "surface-container-highest": "#ebdacf",
        "tertiary-fixed-dim": "#edc600",
        "secondary-fixed-dim": "#ffb0a7",
        "on-primary-fixed-variant": "#531800",
        "on-tertiary-fixed": "#433700",
        "on-background": "#352d28",
        "inverse-on-surface": "#a79b93",
        "on-primary-fixed": "#000000",
        "on-error-container": "#570008",
        "on-secondary-fixed": "#700006",
        "on-secondary-fixed-variant": "#a40811",
        background: "#fff4ef",
        outline: "#80756e",
        "error-container": "#fb5151",
        "surface-variant": "#ebdacf",
        "tertiary-dim": "#5f4e00",
        "surface-tint": "#a33700",
        "primary-dim": "#8f2f00",
        "on-primary-container": "#441200",
        "primary-fixed-dim": "#fc6018",
        "surface-dim": "#e3d1c6",
        "secondary-fixed": "#ffc3bc",
        secondary: "#b41a1a",
        "on-secondary-container": "#94000b",
        "secondary-dim": "#a30610",
        "on-primary": "#ffefeb",
        "outline-variant": "#b7aba3",
        "secondary-container": "#ffc3bc",
        "on-error": "#ffefee",
        "inverse-primary": "#fc6018",
        surface: "#fff4ef",
        "on-surface-variant": "#645a53",
        "on-tertiary-fixed-variant": "#645300",
        tertiary: "#6d5a00",
        "on-tertiary-container": "#594a00",
        "error-dim": "#9f0519",
        "tertiary-fixed": "#fdd400",
        "primary-fixed": "#ff7943",
        "surface-container": "#f5e5db",
        "on-secondary": "#ffefed",
        "surface-bright": "#fff4ef",
        "on-surface": "#352d28",
        primary: "#a33700",
        "tertiary-container": "#fdd400",
        "inverse-surface": "#130d08",
        "surface-container-high": "#f0dfd5",
        "surface-container-lowest": "#ffffff",
        whatsapp: "#25d366",
        "whatsapp-dark": "#128c7e"
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Be Vietnam Pro", "sans-serif"],
        label: ["Be Vietnam Pro", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      boxShadow: {
        kinetic: "0 30px 60px rgba(163,55,0,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
