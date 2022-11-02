const proxy = require('http-proxy-middleware');

module.exports = function(app){
	
	app.use(proxy('/api', { target: '10.108.147.201:8080/' }));
    app.use(proxy('/account', { target: '10.99.252.35:8081/' }));
}
