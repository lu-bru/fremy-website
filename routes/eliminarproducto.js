var express = require('express');
var router = express.Router();
const pool = require('../bd')

router.get('/:id', async function(req, res, next) {
    if(req.session.Idadmin) {
        let id = req.params.id;
        deleteProduct(id);
        res.redirect('/admin/listaproductos');
    } else {
        res.redirect('/')
    }
});

async function deleteProduct(id) {
    let query = "delete from productos where id = ?";
    const rows = await pool.query(query, id);
    console.log(rows);
    return rows;
}

module.exports = router;