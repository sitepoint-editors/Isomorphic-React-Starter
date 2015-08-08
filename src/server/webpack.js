import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../webpack.config.dev";

var server = new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
});

server.listen(8081, "localhost", function() {});
