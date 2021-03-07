const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    nombre:String,
    apellido:String,
    fecha:String,
    direccion:String,
    telefono:String,
    correo:String,
    sitio:String,
    puesto:String

});

module.exports = mongoose.model('tasks',TaskSchema);