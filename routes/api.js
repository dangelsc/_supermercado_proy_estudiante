//api/cliente
var Cliente = require('../models/cliente.model');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cliente', function(req, res, next) {
    console.log("buscar",req.query.search);
    Cliente.find({nit:{$regex:req.query.search},estado:1},(err,lista)=>{
        if(err)
            res.json({item:[],error:err});
        else
            res.json({item:lista});
    })
    
});

module.exports = router;