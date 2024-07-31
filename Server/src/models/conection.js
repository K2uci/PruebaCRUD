const paht = require('node:path')
const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database(paht.join(__dirname,'../database/students.db'));

module.exports = db;