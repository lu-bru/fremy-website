var express = require('express');
var router = express.Router();
const pool = require('../bd')

router.get('/', async function(req, res, next) {
    req.session.destroy()
	res.redirect('/');
});

module.exports = router;