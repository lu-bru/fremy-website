var express = require('express');
var router = express.Router();
const pool = require('../bd');
const mail = require('../mail');

router.post('/', async function(req, res, next) {
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
	let obj = { 
		to : req.body.mail,
		subject : '¡Te subscribiste con éxito!',
		text : "Gracias por subscribirte al newsletter de Fremy Dulcería"
	}
	console.log(obj);
	let envio_mail = await mail.main(obj);
	if(envio_mail) {
		let data = await get4Products()
		// success message
		res.render('mensaje', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin, message : '¡Gracias por subscribirte!'});
	} else {
		// error message
		res.render('mensaje', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin, message : 'Ha ocurrido un error. Vuelve a intentarlo en unos minutos'});
	}
});

async function get4Products() {
	let query = "select * from productos limit 4";
	const rows = await pool.query(query);
	return rows;
}

module.exports = router;
