let express = require('express');
let app = express();
app.get('/say', function (req, res) {
	let { wd, cb } = req.query;
	res.end(`${cb}('返回的信息')`);
});
app.listen(3000, function () {
	console.log('启动');
});
