const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/v1', { target: 'http://192.168.112.11:8039' }));
    app.use(proxy('/v1', { target: 'http://rap.ywwl.com:8080/mockjsdata/68' }));
}