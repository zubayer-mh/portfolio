module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyUI')],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: '#f97316',
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff"
  //       }
  //     },
  //     'dark'
  //   ]
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f97316",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  }
}
// daisyui: {
//   themes: [
//     {
//       mytheme: {
//         primary: "#a991f7",
//         secondary: "#f6d860",
//         accent: "#37cdbe",
//         neutral: "#3d4451",
//         "base-100": "#ffffff",
//       },
//     },
//     "dark",
//     "cupcake",
//   ],
// }
