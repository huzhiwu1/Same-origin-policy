const express = require('express');
let app = express();
let whiteList = ['http://localhost:3000'];
app.use(function (req, res, next) {
	console.log(req.headers);
	let origin = req.headers.origin;
	if (whiteList.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	res.setHeader('Access-Control-Allow-Methods', 'PUT');
	res.setHeader('Access-Control-Max-Age', 500);
	res.setHeader('Access-Control-Allow-Headers', 'name');
	res.setHeader('Access-Control-Expose-Headers', 'name');
	next();
});
// app.update('/say', function (req, res) {
// 	res.end('update');
// });
app.get('/say', function (req, res) {
	// console.log(req.headers);
	res.end('返回信息');
});
app.post('/say', function (req, res) {
	res.end('post请求');
});
app.put('/say', function (req, res) {
	res.setHeader('name', 'huzhiwu');
	res.end('put请求');
});
app.delete('/say', function (req, res) {
	res.end('delete请求');
});
app.listen(4000, function () {
	console.log('4000启动');
});
