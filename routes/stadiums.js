/*
    Rutas de Stadiums / stadiums
    host + /api/stadiums
*/

const {Router} = require('express');
const router = Router();
const {validarJWT} = require('../middlewares/validarJWT');
const { getStadium } = require('../controllers/stadiums');

router.use(validarJWT);


router.get('/',getStadium);



module.exports = router;