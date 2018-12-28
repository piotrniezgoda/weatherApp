module.exports = {
  entry: './index.js',
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Sintony", variants: [ "400", "700" ] },
        { family: "Indie Flower" },
      ],
    }),
  ],
  devServer: {
    disableHostCheck: true,
  }
};