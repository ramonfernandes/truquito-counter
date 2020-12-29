const proxy = {
  "/api/*": {
    target: "https://truquito-server.herokuapp.com/",
    pathRewrite: { "^/api/": "/" },
    secure: false,
    changeOrigin: true,
    logLevel: "info",
  },
};

module.exports = proxy;
