var cone= require("../config/conexiondbmongo");
var mongoose = require("mongoose");
const schema = new mongoose.Schema(
    {   cliente: 'string', 
        nit: 'string',
        fecha: Date,
        total:Number,
        codigocontrol:String,
        detalle:[
            {
                producto:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'producto'
                },
                cant:Number,
                precio:Number,
                importe:Number
            }
        ]
    }
    );
module.exports = mongoose.model('venta', schema);