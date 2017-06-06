var express = require('express')
var log4js = require('log4js')
var router = require('./server/routes/index')
var middleware = require('./server/utils/middleware')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var webpack = require('webpack')
var webpackConfig = require('./config/webpack.dev.config')
var fallback = require('connect-history-api-fallback');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

log4js.configure({
 appenders: [
   { type: 'console' },
   { type: 'file', filename: './server/logs/cheese.log', category: 'cheese' }
  ]
});

var logger = log4js.getLogger('cheese');
logger.setLevel('INFO');

var compiler = webpack(webpackConfig);

var app = express()

app.use('/static', express.static(webpackConfig.commonPath.staticDir));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

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

//使用日志
app.use(log4js.connectLogger(logger, { level: 'auto', format: ':method :url :date' }));

app.use('/',router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(9000, '127.0.0.1', function () {
    console.log('server listen with 3000');
})
