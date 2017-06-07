var express = require('express')
var log = require('./server/utils/logHelper');
var router = require('./server/routes/index')
var middleware = require('./server/utils/middleware')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var webpack = require('webpack')
var webpackConfig = require('./config/webpack.dev.config')
var fallback = require('connect-history-api-fallback');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var path = require('path');
var favicon = require('serve-favicon');



var compiler = webpack(webpackConfig);

var app = express()

app.use('/static', express.static(webpackConfig.commonPath.staticDir));

app.use(favicon(__dirname + '/server/assets/favicon.ico'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

//启用日志
log.use(app);

// serve webpack bundle output
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(webpackHotMiddleware(compiler));


app.use(fallback());
//扩展api错误和正确结果
app.use(middleware.extendAPIOutput);

//扩展错误处理
app.use(middleware.apiErrorHandle);


app.use('/',router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(9000, '127.0.0.1', function () {
    console.log('server listen with 3000');
})
