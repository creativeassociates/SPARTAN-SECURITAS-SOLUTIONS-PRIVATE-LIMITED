/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "Manrope", "Inter", "system-ui", "sans-serif"],
        body: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        slate: colors.slate,
        night: "#050915",
        "night-soft": "#0b1022",
        aurora: "#7c3aed",
        cyanpulse: "#22d3ee",
      },
      boxShadow: {
        glow: "0 20px 70px -35px rgba(34,211,238,0.6)",
        card: "0 20px 60px -30px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.18), transparent 25%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.18), transparent 23%), radial-gradient(circle at 50% 70%, rgba(59,130,246,0.14), transparent 25%)",
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
});
