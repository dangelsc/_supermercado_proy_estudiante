var express = require('express');
var router = express.Router();
var control=  require("../controllers/cliente.controller");

router.get('/buscar',control.buscar);
router.post('/buscar',control.buscar);

module.exports = router;
