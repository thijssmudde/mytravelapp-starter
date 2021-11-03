module.exports = {
  presets: [require("./node_modules/tappui/tailwind.config.js")],
  purge: {
    enabled: true,
    content: ["./src/**/*.{ts,tsx}", "./node_modules/tappui/dist/*.{js,jsx}"],
  },
};
