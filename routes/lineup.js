/*
    Rutas de Lineups / lineups
    host + /api/lineups
*/

const {Router} = require('express');
const { getLineups } = require('../controllers/lineup');
const router = Router();
const {validarJWT} = require('../middlewares/validarJWT');

router.use(validarJWT);


router.get('/',getLineups);



module.exports = router;