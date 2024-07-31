const express = require('express'); 
const cors = require('cors'); 
const router = express.Router();

const addUser = require('../utlis/addUser');
const delUserr = require('../utlis/delUserr');
const editUser = require('../utlis/editUser');
const loadUsers = require('../utlis/loadUsers');

router.use(express.json())
router.use(cors())

router.post('/adduser', (req,res) => addUser(req,res)) //OK
router.delete('/deleteuser', (req,res) => delUserr(req,res)) //OK
router.put('/edituser', (req,res) => editUser(req,res)) //OK
router.get('/loaduser', (req,res) => loadUsers(req,res)) //OK

module.exports = router;