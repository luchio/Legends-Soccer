/*
    Rutas de Balls / balls
    host + /api/balls
*/

const {Router} = require('express');
const router = Router();
const {validarJWT} = require('../middlewares/validarJWT');
const { getBalls } = require('../controllers/balls');

router.use(validarJWT);


router.get('/',getBalls);



module.exports = router;