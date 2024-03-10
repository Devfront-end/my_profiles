/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add the paths to all the files where you want to use Tailwind CSS classes
    // For example, if you have HTML files in a 'src' folder, you can use:
    "./src/**/*.html",
    // If you have JavaScript files that use Tailwind CSS classes, add them as well:
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      // Add any custom theme extensions here, if needed
      // For example, if you want to add a custom spacing value:
      // spacing: {
      //   '128': '32rem',
      // },
    },
  },
  plugins: [
    // Add any additional Tailwind CSS plugins here, if needed
  ],
}
