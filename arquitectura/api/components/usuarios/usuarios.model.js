//Requerimos mongoose
let mongoose = require('mongoose');

//Esquema de usuarios
let UserSchema = new mongoose.Schema({
  nombre : String,
  correo : String,
  telefono : String
});


//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', UserSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural