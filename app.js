const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Formulario')
    .then(db => console.log('DB conectada'))
    .catch(err => console.log(err));

const indexRoutes = require('./rutas/index');

app.set('port',process.env.PORT || 3000 );
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use('/',indexRoutes);
app.use(express.static("public"));

app.listen(app.get('port'),() =>{
    console.log (`Server on port ${app.get('port')}`);
});