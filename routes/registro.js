var express = require('express');
var router = express.Router();
const pool = require('./../bd');

router.get('/', async function(req, res, next) {
    res.render('registro');
  })

// Create new user
router.post('/', async function(req, res, next) {
    let obj = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        mail : req.body.mail,
        password : req.body.password,
    }
    let registro_ok = registro(obj);
    if(registro_ok){
        // if the registration was successful, go to login
        res.render('login')
    }
})

async function registro(obj) {
    let query = "insert into usuarios set ?";
    const rows = await pool.query(query,[obj])
    return true;
}

module.exports = router;