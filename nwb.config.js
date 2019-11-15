const path = require("path");

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  devServer: {
    disableHostCheck: true
  },
  webpack: {
    html: {
      template: "demo/public/index.html"
    },
    aliases: {
      // 'rmw-shell': path.resolve('src'),
      "zip-shell/lib": path.resolve("src")
    }
  }
};
