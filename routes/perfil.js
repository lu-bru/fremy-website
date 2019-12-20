var express = require('express');
var router = express.Router();
const pool = require('./../bd')

// show user's info
router.get('/', async function (req,res,next) {
	var isLogged = false;
	var isUser = false;
	var isAdmin = false;
	console.log(req.session.Idusuario)
    if(req.session.Idusuario || req.session.Idadmin) {
		isLogged = true;
		if(req.session.Idusuario) {
			isUser = true;
			isAdmin = false;
			let id = req.session.Idusuario;
			let data = await getPerfilInfo(id);
        	res.render('perfil', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
		}
		else if(req.session.Idadmin){
			isUser = false;
			isAdmin = true;
        	let id = req.session.Idadmin;
        	let data = await getPerfilInfo(id);
        	res.render('perfil', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
		}
	} else {
	isLogged = false;
	console.log(isLogged);
	console.log(isUser);
	console.log(isAdmin);
	res.redirect('/login');
    }
});

async function getPerfilInfo(id){
  let query = "select * from usuarios where id = ?";
  let rows = await pool.query(query, id);
  return rows;
}

//edit user's info
router.post('/', async function(req, res, next) {
	if (req.session.Idusuario) {
		var id = req.session.Idusuario;
	} else if (req.session.Idadmin) {
		var id = req.session.Idadmin;
	}
	console.log(req.session.Idusuario);
	console.log(req.session.Idadmin);
  	if ((req.body.newpassword) == (req.body.confirmpassword)) {
   		//gets info from the form
		let obj = {
			nombre : req.body.nombre,
			apellido : req.body.apellido,
			mail : req.body.mail,
			password : req.body.newpassword,
		}
		// edits and shows updated info
		let editUser_ok = editUser(obj, id);
		if(editUser_ok){
			res.redirect('/perfil');
		}
	}
	else {
		isLogged = true;
		if(req.session.Idusuario) {
			isUser = true;
			isAdmin = false;
			let id = req.session.Idusuario;
			let data = await getPerfilInfo(id);
        	res.render('perfil', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin, message : 'Las contraseñas no coinciden'});
		}
		else if(req.session.Idadmin){
			isUser = false;
			isAdmin = true;
        	let id = req.session.Idadmin;
        	let data = await getPerfilInfo(id);
        	res.render('perfil', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin, message : 'Las contraseñas no coinciden'});
		}
}});

async function editUser(obj, id) {
  let query = "update usuarios set ? where usuarios.id = ?";
  let rows = await pool.query(query,[obj, id])
  return true;
  console.log(editUser);
}

module.exports = router;