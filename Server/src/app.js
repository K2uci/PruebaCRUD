const express = require("express"); 
const cors = require('cors'); 
const morgan = require('morgan')
const router = require('./routes/routes')
const app = express();

app.use(router)

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());





module.exports = app;