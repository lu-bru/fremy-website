var express = require('express');
var router = express.Router();
const pool = require('./../bd');
const multer = require('multer');
const upload = multer({dest: './uploads'});
const uuid = require('uuid');
const fs = require('fs');

router.get('/', async function (req,res,next) {
    if(req.session.Idadmin) {
        res.render('admin');
    } else {
        res.redirect('/')
    }
});

router.get('/listaproductos', async function (req,res,next) {
    if(req.session.Idadmin) {
        let data = await getProducts();
        console.log(data);
        res.render('listaproductos', {data : data});
    } else {
        res.redirect('/')
    }
});

router.get('/listaproductos/editar/:id', async function (req,res,next) {
    if(req.session.Idadmin) {
        let id = req.params.id;
        let data = await getProductInfo(id);
        console.log(data);
        res.render('editarproducto', {data : data});
    } else {
        res.redirect('/')
    }
});

router.get('/listausuarios', async function (req, res, next) {
    if(req.session.Idadmin) {
        let data = await getUsers();
        console.log(data);
        res.render('listausuarios', {data : data});
    } else {
        res.redirect('/');
    }
});

// Add product
router.post('/listaproductos', upload.array('img', 1), async function(req, res, next) {  
    let mimetype = req.files[0].mimetype;
    let arrayMimetype = mimetype.split('/');
    let extension = arrayMimetype[1]
    let nombre_img = uuid();
    let obj = {
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        ingredientes : req.body.ingredientes,
        precio : req.body.precio,
        categoria : req.body.categoria,
        img : nombre_img + "." + extension,
    }
    let newProduct_ok = await newProduct(obj);
    fs.createReadStream('./uploads/'+req.files[0].filename).pipe(fs.createWriteStream('./public/img/'+ obj.img));
    console.log(req.files[0].filename);
    console.log(nombre_img);
    console.log(obj.img);
    fs.unlink('./uploads/'+req.files[0].filename, (error)=>{
        if(error){
            console.log(error);
        }
    })
    if(newProduct_ok){
        console.log(newProduct_ok)
        res.redirect('/admin/listaproductos');
    }
});
   
async function newProduct(obj) {
    let query = "insert into productos set ?";
    const rows = await pool.query(query,[obj]);
    return rows.insertId;
}

async function getProducts() {
    let query = "select * from productos";
    const rows = await pool.query(query);
    return rows;
}

async function getUsers() {
    let query = "select * from usuarios";
    const rows = await pool.query(query);
    return rows;
}
  
async function getProductInfo(id){
    let query = "select * from productos where id = ?";
    let rows = await pool.query(query, id);
    return rows;
  }

module.exports = router;