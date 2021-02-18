var express = require('express');
var router = express.Router();
var control=  require("../controllers/venta.controller");
///url dominio.com/venta/nuevo
/*                      /lista
                        /editar
                        /anular
                        /reimprimir
*/

/* GET home page. */
router.get('/nuevo',control.nuevoform);
router.post('/nuevo',control.nuevo);
module.exports = router;
