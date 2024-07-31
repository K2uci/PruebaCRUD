const db = require('../models/conection')

//Funcion encargada de editar los usuarios en la BD segun su EMAIL 
//ESTE DATO AL SER SU PK NUNCA SERA MODIFICADO
const editUser = (req,res) => {
    const { email , lname , fname , grade } = req.body;
    db.all(`UPDATE students SET lname = '${lname}', fname = '${fname}', grade = '${grade}' WHERE email = '${email}' `,(err,result)=>{
        if (result) {
            res.status(200).send('')
        } else {
            console.log(err)
            res.status(404).json({error:"Ha ocurrido un error en la BD"})
        }
    })
}
module.exports = editUser;
