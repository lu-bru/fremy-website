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
	res.render('tienda', {isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
});

router.get('/donas', async function(req, res, next) {
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
    let data = await getProductsDonas();
    res.render('donas', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
});

router.get('/helados', async function(req, res, next) {
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
    let data = await getProductsHelados();
    res.render('helados', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
});

router.get('/cupcakes', async function(req, res, next) {
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
    let data = await getProductsCupcakes();
    res.render('cupcakes', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
});

router.get('/cookies', async function(req, res, next) {
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
    let data = await getProductsCookies();
    res.render('cookies', {data : data, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
});



router.get('/:categoria/:id', async function(req, res, next) {
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
	let id = req.params.id
	let categoria = req.params.categoria
	let data = await getProduct(id);
	let data2 = await get4(categoria);
    res.render('productos', {data : data, data2 : data2, isLogged : isLogged, isUser : isUser, isAdmin : isAdmin});
});

async function getProduct(id){
    let query = "select * from productos where id = ?";
    let rows = await pool.query(query, id);
    return rows;
}

async function get4(categoria){
	let query = "select * from productos where categoria = ? limit 4"
	let rows = await pool.query(query, [categoria]);
	return rows;
}

async function getProductsDonas(){
    let query = "select * from productos where categoria = 'Donas'";
    let rows = await pool.query(query);
    return rows;
}

async function getProductsHelados(){
    let query = "select * from productos where categoria = 'Helados'";
    let rows = await pool.query(query);
    return rows;
}

async function getProductsCupcakes(){
    let query = "select * from productos where categoria = 'Cupcakes'";
    let rows = await pool.query(query);
    return rows;
}

async function getProductsCookies(){
    let query = "select * from productos where categoria = 'Cookies'";
    let rows = await pool.query(query);
    return rows;
}

module.exports = router;