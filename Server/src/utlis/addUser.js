const db = require('../models/conection')

//Funcion encargada de agregar un usuario a la tabla students 
const addUser = (req,res) => {
    const { email , lname , fname , age , grade } = req.body;
    db.run(`INSERT INTO students (email , lname , fname , grade) VALUES ('${email}','${lname}','${fname}','${grade}')`,(err,resul) => {
        if (err) {
            res.status(404).json({error:"Ha ocurrido un error en la BD"})
        } else {
            res.status(200).send('')
        }
    })
}

module.exports = addUser;