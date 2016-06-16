var db = require('mongoose');
db.conect(process.env.DB_URI);

module.exports = db;
