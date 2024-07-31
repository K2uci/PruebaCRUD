const db = require('../models/conection')

//Funcion encargada de eliminar un usuario segun su email
const delUser = (req,res) => {
    const { email } = req.body;
    db.run(`DELETE FROM students WHERE email = '${email}'`,(err,resul) => {
        if (err) {
            res.status(404).json({error:"Ha ocurrido un error en la BD"})
        } else {
            res.status(200).send('')
        }
    })
}
module.exports = delUser;
