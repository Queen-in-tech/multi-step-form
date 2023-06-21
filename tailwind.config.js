module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktopBg': "url('bg-sidebar-desktop.svg')",
        'mobileBg': "url('bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [],
}

