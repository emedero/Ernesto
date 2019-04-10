const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { mongoose } = require('./database')
//setting 
app.set('port', process.env.PORT || 3000)
//middlewars
app.use(morgan('dev')); 
app.use(express.json());
//routes
app.use('/api/products', require('../routes/product.route'));
//static files
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
//startinr de server
app.listen(app.get('port'), () => {
    //tarea
    console.log(`server on port ${app.get('port')}`)
})      