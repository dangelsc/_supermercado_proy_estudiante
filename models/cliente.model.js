var cone= require("../config/conexiondbmongo");
var mongoose = require("mongoose");
const schema = new mongoose.Schema(
    {   
        cliente: String, 
        nit: String,
        estado:Number
    },{
        collection:'cliente'
    }
    );
module.exports = mongoose.model('cliente', schema);