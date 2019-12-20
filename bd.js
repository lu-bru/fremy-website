const mysql = require('mysql');
const util = require('util');

const pool = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'fremy_db'

});

pool.query = util.promisify(pool.query);

module.exports = pool;