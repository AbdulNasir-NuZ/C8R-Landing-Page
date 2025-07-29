module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        codepenioabbey: "var(--codepenioabbey)",
        "codepenioalto-5": "var(--codepenioalto-5)",
        "codepenioalto-50": "var(--codepenioalto-50)",
        codepenioapple: "var(--codepenioapple)",
        "codepenioathens-gray": "var(--codepenioathens-gray)",
        codepenioatlantis: "var(--codepenioatlantis)",
        "codepeniobitter-lemon-50": "var(--codepeniobitter-lemon-50)",
        codepenioblack: "var(--codepenioblack)",
        "codepenioblack-10": "var(--codepenioblack-10)",
        "codepenioblack-pearl": "var(--codepenioblack-pearl)",
        "codepenioblack-pearl-60": "var(--codepenioblack-pearl-60)",
        "codepeniocod-gray": "var(--codepeniocod-gray)",
        codepeniocomet: "var(--codepeniocomet)",
        codepeniocorduroy: "var(--codepeniocorduroy)",
        "codepenioelectric-lime": "var(--codepenioelectric-lime)",
        codepenioemerald: "var(--codepenioemerald)",
        codepenioeucalyptus: "var(--codepenioeucalyptus)",
        codepeniofeijoa: "var(--codepeniofeijoa)",
        "codepeniofern-green": "var(--codepeniofern-green)",
        "codepeniogranny-smith": "var(--codepeniogranny-smith)",
        "codepeniogreen-pea": "var(--codepeniogreen-pea)",
        codepeniomako: "var(--codepeniomako)",
        "codepeniomine-shaft": "var(--codepeniomine-shaft)",
        codepenionandor: "var(--codepenionandor)",
        codepenionevada: "var(--codepenionevada)",
        codepenioolivine: "var(--codepenioolivine)",
        "codepeniooslo-gray": "var(--codepeniooslo-gray)",
        "codepeniosantas-gray": "var(--codepeniosantas-gray)",
        codepeniosirocco: "var(--codepeniosirocco)",
        codepeniosushi: "var(--codepeniosushi)",
        codepeniotiber: "var(--codepeniotiber)",
        "codepeniotree-poppy": "var(--codepeniotree-poppy)",
        codepeniowhite: "var(--codepeniowhite)",
        "codepeniowhite-20": "var(--codepeniowhite-20)",
        "codepeniowhite-50": "var(--codepeniowhite-50)",
        "codepeniowhite-6": "var(--codepeniowhite-6)",
        codepeniowoodsmoke: "var(--codepeniowoodsmoke)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "codepen-io-archivo-medium":
          "var(--codepen-io-archivo-medium-font-family)",
        "codepen-io-archivo-regular":
          "var(--codepen-io-archivo-regular-font-family)",
        "codepen-io-archivo-semibold":
          "var(--codepen-io-archivo-semibold-font-family)",
        "codepen-io-archivo-semibold-upper":
          "var(--codepen-io-archivo-semibold-upper-font-family)",
        "codepen-io-lato-regular": "var(--codepen-io-lato-regular-font-family)",
        "codepen-io-semantic-button":
          "var(--codepen-io-semantic-button-font-family)",
        "codepen-io-semantic-heading-1-upper":
          "var(--codepen-io-semantic-heading-1-upper-font-family)",
        "codepen-io-semantic-heading-2-upper":
          "var(--codepen-io-semantic-heading-2-upper-font-family)",
        "codepen-io-semantic-heading-3-upper":
          "var(--codepen-io-semantic-heading-3-upper-font-family)",
        "codepen-io-semantic-heading-4-upper":
          "var(--codepen-io-semantic-heading-4-upper-font-family)",
        "codepen-io-semantic-heading-5-upper":
          "var(--codepen-io-semantic-heading-5-upper-font-family)",
        "codepen-io-semantic-heading-6-upper":
          "var(--codepen-io-semantic-heading-6-upper-font-family)",
        "codepen-io-semantic-link":
          "var(--codepen-io-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
