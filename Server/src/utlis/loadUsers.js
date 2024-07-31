const db = require('../models/conection')

//Funcion encargada de devolver todos los usuarios existentes en la tabla students
const getUsers = (req,res) => {
  db.all('SELECT * FROM students',(err,rows)=>{
    if (rows) {
      res.status(200).json(rows)
    } else {
      res.status(404).json({error:"Ha ocurrido un error en la BD"})
    }
  })
}

module.exports = getUsers;
