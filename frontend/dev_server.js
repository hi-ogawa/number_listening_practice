var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");

var express = require("express");
var proxy = require("proxy-middleware");
var url = require("url")

var app = express();
app.use("/assets", proxy(url.parse("http://localhost:8081/assets")));
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

var server = new WebpackDevServer(webpack(config), {
  publicPath: "/assets/"
});

server.listen(8081, "localhost", function() {});
app.listen(8080);
