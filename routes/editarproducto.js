var express = require('express');
var router = express.Router();
const pool = require('../bd');
const multer = require('multer');
const upload = multer({dest: './uploads'});
const uuid = require('uuid');
const fs = require('fs');

// Edit product
router.post('/:id', upload.array('img', 1), async function(req, res, next) {
        var id = req.params.id;
        var obj = {}
        if(req.session.Idadmin) {
        // Edit info but no img
        if(req.files[0] == undefined) {
            obj = { 
                nombre : req.body.nombre,
                descripcion : req.body.descripcion,
                ingredientes : req.body.ingredientes,
                precio : req.body.precio,
                categoria : req.body.categoria,
            }
        // Edit img
        } else {
            let mimetype = req.files[0].mimetype;
            let arrayMimetype = mimetype.split('/');
            let extension = arrayMimetype[1]
            let nombre_img = uuid();
            obj = { 
                nombre : req.body.nombre,
                descripcion : req.body.descripcion,
                ingredientes : req.body.ingredientes,
                precio : req.body.precio,
                categoria : req.body.categoria,
                img : nombre_img + "." + extension
            }
            fs.createReadStream('./uploads/'+req.files[0].filename).pipe(fs.createWriteStream('./public/img/'+ obj.img));
            fs.unlink('./uploads/'+req.files[0].filename, (error)=>{
                if(error){
                    console.log(error);
                }
            })
        }
        let editProduct_ok = editProduct(obj, id);
        if(editProduct_ok){
            console.log(editProduct_ok);
            res.redirect('/admin/listaproductos');
        }
    } else {
        res.redirect('/')
    }
});

async function editProduct(obj, id) {
    let query = "update productos set ? where id = ?";
    const rows = await pool.query(query,[obj, id]);
    return rows;
}

module.exports = router;