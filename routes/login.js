var express = require('express');
var router = express.Router();
const pool = require('./../bd')

router.get('/', async function(req, res, next) {
  res.render('login');
})

router.get('/logout', async function(req, res, next) {
    req.session.destroy();
    res.redirect('/');
})

router.post('/', async function(req, res, next) {
    let mail = req.body.mail;
    let password = req.body.password;
    let data = await login(mail, password);
    if (data.length == 1)   {
        let permisos = data[0].permisos;
        let id = data[0].id;
        console.log(permisos);
        console.log(id);
        if (permisos == 0) {
            // it's a regular user
            req.session.Idusuario = id;
        } else {
            // it's admin
            req.session.Idadmin = id;
        }
        res.redirect('/');
    } else {
        res.render('login', {message : 'Usuario o contraseña incorrectos'})
    }
})

async function login(mail, password) {
    let query = "select * from usuarios where mail = ? and password = ?";
    const rows = await pool.query(query ,[mail,password])
    console.log(rows);
    return rows;
}

module.exports = router;
