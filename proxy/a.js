const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
//将请求转发到另一个服务器
const apiProxy = createProxyMiddleware('/say', {
	target: 'http://localhost:4000',
});

const app = express();
app.use(express.static(__dirname));
app.use(apiProxy);
app.listen(3000, function () {
	console.log('3000启动');
});
