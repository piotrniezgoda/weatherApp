const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "index.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
          { family: "Sintony", variants: [ "400", "700" ] },
          { family: "Indie Flower" },
      ];
      path: "/assets/fonts",
      filename: "/assets/fonts/fonts.css"
    })
  ],
  devServer: {
    disableHostCheck: true,
  }
};