const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const app = express();
const https = require("https");

app.use(cors());
app.use(body_parser());

app.get('/api/data', (req, res) => {
	var query = [];
	for (var prop in req.query) {
		query.push(prop + "=" + req.query[prop]);
	}
	const url = `https://ib17.hip-hop.ru/api/round/table?${query.join("&")}`;
	https.get(url, result => {
		result.setEncoding("utf8");
		let body = "";

		result.on("data", (data) => {
			body += data;
		});
		result.on("end", () => {
			body = JSON.parse(body);
			return res.json(body);
		});
	});
});

app.listen(4000, () => {
	console.log('server is listening on http://localhost:4000/');
});