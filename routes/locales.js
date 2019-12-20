var express = require('express');
var router = express.Router();
const pool = require('../bd')

router.get('/', async function(req, res, next) {
	var isLogged = false;
	var isUser = false;
	var isAdmin = false;
	if(req.session.Idusuario || req.session.Idadmin) {
		isLogged = true;
		if(req.session.Idusuario){
			isUser = true;
			isAdmin = false;
		}
		else if(req.session.Idadmin){
			isUser = false;
			isAdmin = true;
		}
	} else {
		isLogged = false;
	}
	console.log(isLogged);
	console.log(isUser);
	console.log(isAdmin);
	res.render('locales', {isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
});

module.exports = router;
