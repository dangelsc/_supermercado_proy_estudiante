var Venta = require("../models/venta.model");
module.exports={
    nuevoform:function(req,res,next){
        res.render('venta/nuevoform',{});
    },
    nuevo:async function(req,res,next){
        let n=new Venta(req.body);
        try{
            let dato=await n.save();

            res.redirect('/venta/nuevo');
        }catch(err){
            res.render('venta/nuevoform',{error:err});
        }
    }
}
