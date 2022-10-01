/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors:{
			'white': '#DFF6FF',
			'blue': '#584EFD',
			'brown': '#2B332C',
      
		},
	  extend: {
		backgroundImage: {
			'buildings-card': "url('/buildings-card.png')",
			
		  }
	  },
	},
	plugins: [],
  }