var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', async function(req, res, next) {
	try {
		const result = await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(response => response.json());
  	res.json(result);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
