/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/image6.jpg')",
        'hoo': "url('assets/image.jpg')",
        'ho': "url('assets/image3.jpg')",
        'img': "url('assets/image1.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],

  

}

