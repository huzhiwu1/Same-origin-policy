const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/say', function (req, res) {
	res.end('我是b服务器的信息');
});
app.listen(4000, function () {
	console.log('4000启动');
});
